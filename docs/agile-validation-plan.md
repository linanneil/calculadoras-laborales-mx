# Herramientas Laborales agile validation plan

This plan replaces previous broad SEO/GEO expansion ideas for the current stage.

## Core principle

Pause large-scale page expansion and aggressive indexing intervention. Current work must be data-driven, small-step, focused on validating the Puebla signal, and careful about legal and trust risk.

## Task 1: observation period

Status: active immediately.

Agent actions:

- Stop aggressive code and page-level changes.
- Observe GSC Puebla-related data for 3-5 days.
- Do not trigger production code pushes during the observation period.

Core metrics:

- Whether impressions grow from 94 to 120-150.
- Whether CTR remains low or near 0%.
- Whether `calculadora liquidacion puebla` appears repeatedly with stable impressions.

## Task 2: second Puebla title/meta test

Trigger:

- After the observation period, impressions grow but CTR does not improve.

Allowed action:

- Update only the Puebla page title and meta description for a controlled SERP-copy test.

Strict red lines:

- Do not use `Exacto`, `Garantizado`, or similar claims.
- Keep the calculator positioned as an estimate.
- Keep official outbound links as normal trust signals with `rel="noopener noreferrer"`.
- Do not add `nofollow` to official government sources.

Candidate copy:

- Title: `Calculadora de Finiquito en Puebla 2026 | Estimacion Rapida y LFT`
- Meta description: `Quieres una estimacion de tu finiquito o liquidacion en Puebla? Calcula los proporcionales segun la LFT 2026 de forma facil. Incluye notas y fuentes oficiales.`

## Task 3: liquidacion Puebla split page

Trigger:

- `calculadora liquidacion puebla` appears repeatedly in GSC with stable impressions.

Allowed action:

- Create a dedicated `/calculadora-liquidacion-puebla/` page only after the trigger is met.
- Position it for dismissal/indemnity intent, separated from the existing finiquito page.
- Keep distinction clear:
  - Finiquito: pending/proportional benefits, often resignation or normal termination.
  - Liquidacion: dismissal/indemnity scenarios.

## Mid-term task: core page and GEO strengthening

Allowed when the observation period supports further action:

- Refine the main finiquito calculator explanation into a 600-1000 word practical guide in Spanish.
- Avoid keyword stuffing.
- Use natural-language `H2/H3` questions followed by short direct first-sentence answers.
- Keep FAQ JSON-LD valid and aligned with visible page content.
- Strengthen disclaimer and methodology language:
  - Results are LFT-based estimates.
  - Results are bruto before tax.
  - The tool does not calculate ISR after-tax deductions.
  - The tool does not replace legal, fiscal, or accounting advice.

## Current default decision

As of the last GSC review, do not change production code. Continue watching Puebla data. If Google keeps releasing signal, feed the page precise content only when a trigger is met.
