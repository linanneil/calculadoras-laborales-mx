import { describe, expect, it } from "vitest";
import {
  calculateAguinaldo,
  calculateFiniquito,
  calculateIntegratedDailySalary,
  calculateLiquidation,
  calculateVacations,
  daysBetween,
  vacationDaysForYears,
} from "../src/lib/labor";

describe("labor calculations", () => {
  it("counts inclusive service days", () => {
    expect(daysBetween("2026-01-01", "2026-01-01")).toBe(1);
    expect(daysBetween("2026-01-01", "2026-01-31")).toBe(31);
    expect(daysBetween("2026-02-01", "2026-01-31")).toBe(0);
  });

  it("uses the Mexican vacation day table", () => {
    expect(vacationDaysForYears(1)).toBe(12);
    expect(vacationDaysForYears(5)).toBe(20);
    expect(vacationDaysForYears(6)).toBe(22);
    expect(vacationDaysForYears(11)).toBe(24);
  });

  it("calculates proportional aguinaldo with 15 minimum days", () => {
    const result = calculateAguinaldo({
      dailySalary: 500,
      startDate: "2026-01-01",
      endDate: "2026-06-30",
    });
    expect(result.total).toBeCloseTo((500 * 15 * 181) / 365, 2);
  });

  it("calculates aguinaldo only for days worked in the current year", () => {
    const result = calculateAguinaldo({
      dailySalary: 500,
      startDate: "2026-06-01",
      endDate: "2026-06-30",
    });
    expect(result.total).toBeCloseTo((500 * 15 * 30) / 365, 2);
  });

  it("uses leap-year days for aguinaldo when applicable", () => {
    const result = calculateAguinaldo({
      dailySalary: 366,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
    });
    expect(result.total).toBeCloseTo(366 * 15, 2);
  });

  it("calculates vacations and premium", () => {
    const result = calculateVacations({
      dailySalary: 500,
      startDate: "2025-06-15",
      endDate: "2026-06-15",
    });
    expect(result.items).toHaveLength(2);
    expect(result.total).toBeGreaterThan(0);
  });

  it("combines finiquito concepts", () => {
    const result = calculateFiniquito({
      dailySalary: 500,
      startDate: "2024-01-15",
      endDate: "2026-06-15",
      pendingSalaryDays: 5,
    });
    expect(result.items[0]?.amount).toBe(2500);
    expect(result.total).toBeGreaterThan(2500);
  });

  it("includes liquidation concepts", () => {
    const result = calculateLiquidation({
      dailySalary: 500,
      startDate: "2023-01-01",
      endDate: "2026-01-01",
      pendingSalaryDays: 0,
    });
    expect(result.items[0]?.amount).toBe(45000);
    expect(result.total).toBeGreaterThan(45000);
  });

  it("handles invalid and negative inputs without negative totals", () => {
    const result = calculateFiniquito({
      dailySalary: -1,
      startDate: "bad",
      endDate: "bad",
      pendingSalaryDays: -3,
    });
    expect(result.total).toBe(0);
  });

  it("calculates integrated daily salary above base salary", () => {
    expect(calculateIntegratedDailySalary(500, 1)).toBeGreaterThan(500);
  });
});
