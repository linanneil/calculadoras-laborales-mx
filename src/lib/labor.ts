export type LaborInput = {
  dailySalary: number;
  startDate: string;
  endDate: string;
  pendingSalaryDays?: number;
  minimumWage?: number;
};

export type BreakdownItem = {
  label: string;
  amount: number;
};

export type LaborResult = {
  items: BreakdownItem[];
  total: number;
  yearsWorked: number;
  daysWorked: number;
};

export const GENERAL_MINIMUM_WAGE_2026 = 315.04;
export const BORDER_MINIMUM_WAGE_2026 = 440.87;
export const AGUINALDO_DAYS = 15;
export const VACATION_PREMIUM_RATE = 0.25;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function positiveNumber(value: number, fallback = 0): number {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export function daysBetween(startDate: string, endDate: string): number {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  return inclusiveDays(start, end);
}

function inclusiveDays(start: Date, end: Date): number {
  const days = Math.floor((end.getTime() - start.getTime()) / MS_PER_DAY) + 1;
  return Math.max(days, 0);
}

export function fullYearsWorked(startDate: string, endDate: string): number {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return 0;
  let years = end.getFullYear() - start.getFullYear();
  const anniversary = new Date(end.getFullYear(), start.getMonth(), start.getDate());
  if (end < anniversary) years -= 1;
  return Math.max(years, 0);
}

export function vacationDaysForYears(years: number): number {
  const safeYears = Math.max(1, Math.floor(positiveNumber(years, 1)));
  if (safeYears <= 5) return 10 + safeYears * 2;
  return 20 + Math.ceil((safeYears - 5) / 5) * 2;
}

export function currentServiceYearDays(startDate: string, endDate: string): number {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return 0;
  const years = fullYearsWorked(startDate, endDate);
  const anniversary = new Date(start);
  anniversary.setFullYear(start.getFullYear() + years);
  return Math.max(Math.floor((end.getTime() - anniversary.getTime()) / MS_PER_DAY) + 1, 0);
}

export function calculateAguinaldo(input: LaborInput): LaborResult {
  const dailySalary = positiveNumber(input.dailySalary);
  const start = new Date(`${input.startDate}T00:00:00`);
  const end = new Date(`${input.endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    return result([{ label: "Aguinaldo proporcional", amount: 0 }], input);
  }
  const yearStart = new Date(end.getFullYear(), 0, 1);
  const yearEnd = new Date(end.getFullYear(), 11, 31);
  const accrualStart = start > yearStart ? start : yearStart;
  const workedThisYear = inclusiveDays(accrualStart, end);
  const amount = (dailySalary * AGUINALDO_DAYS * workedThisYear) / inclusiveDays(yearStart, yearEnd);
  return result([{ label: "Aguinaldo proporcional", amount }], input);
}

export function calculateVacations(input: LaborInput): LaborResult {
  const years = Math.max(fullYearsWorked(input.startDate, input.endDate), 1);
  const vacationDays = vacationDaysForYears(years);
  const serviceYearDays = currentServiceYearDays(input.startDate, input.endDate);
  const proportionalDays = (vacationDays * Math.min(serviceYearDays, 365)) / 365;
  const vacationAmount = positiveNumber(input.dailySalary) * proportionalDays;
  const premium = vacationAmount * VACATION_PREMIUM_RATE;
  return result(
    [
      { label: "Vacaciones proporcionales", amount: vacationAmount },
      { label: "Prima vacacional minima", amount: premium },
    ],
    input,
  );
}

export function calculateFiniquito(input: LaborInput): LaborResult {
  const salaryPending = positiveNumber(input.dailySalary) * positiveNumber(input.pendingSalaryDays ?? 0);
  const aguinaldo = calculateAguinaldo(input).items[0]?.amount ?? 0;
  const vacations = calculateVacations(input).total;
  return result(
    [
      { label: "Salarios pendientes", amount: salaryPending },
      { label: "Aguinaldo proporcional", amount: aguinaldo },
      { label: "Vacaciones y prima vacacional", amount: vacations },
    ],
    input,
  );
}

export function calculateLiquidation(input: LaborInput): LaborResult {
  const dailySalary = positiveNumber(input.dailySalary);
  const years = fullYearsWorked(input.startDate, input.endDate);
  const minimumWage = positiveNumber(input.minimumWage ?? GENERAL_MINIMUM_WAGE_2026, GENERAL_MINIMUM_WAGE_2026);
  const seniorityBase = Math.min(dailySalary, minimumWage * 2);
  const constitutional = dailySalary * 90;
  const twentyDays = dailySalary * 20 * years;
  const seniorityPremium = seniorityBase * 12 * years;
  const finiquito = calculateFiniquito(input).total;
  return result(
    [
      { label: "Indemnizacion constitucional estimada", amount: constitutional },
      { label: "20 dias por ano trabajado", amount: twentyDays },
      { label: "Prima de antiguedad estimada", amount: seniorityPremium },
      { label: "Finiquito estimado", amount: finiquito },
    ],
    input,
  );
}

export function calculateIntegratedDailySalary(dailySalary: number, years: number): number {
  const salary = positiveNumber(dailySalary);
  const vacationDays = vacationDaysForYears(Math.max(1, years));
  const factor = 1 + AGUINALDO_DAYS / 365 + (vacationDays * VACATION_PREMIUM_RATE) / 365;
  return salary * factor;
}

function result(items: BreakdownItem[], input: LaborInput): LaborResult {
  const cleanItems = items.map((item) => ({
    label: item.label,
    amount: Number.isFinite(item.amount) && item.amount > 0 ? item.amount : 0,
  }));
  return {
    items: cleanItems,
    total: cleanItems.reduce((sum, item) => sum + item.amount, 0),
    yearsWorked: fullYearsWorked(input.startDate, input.endDate),
    daysWorked: daysBetween(input.startDate, input.endDate),
  };
}
