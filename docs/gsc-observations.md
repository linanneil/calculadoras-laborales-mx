# Google Search Console observations

## 2026-07-02

Source: Google Search Console performance report for `sc-domain:herramientaslaborales.com`, 3-month range, web search. Last updated 11 hours before review.

### Summary

- Clicks: 1
- Impressions: 50
- CTR: 2%
- Average position: 11.3
- Page indexing report: still processing data
- Main signal: almost all impressions are concentrated on the Puebla finiquito page

### Queries

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| calculadora de finiquito puebla | 0 | 7 |
| calcular finiquito puebla | 0 | 6 |
| calculadora finiquito puebla | 0 | 5 |
| calcular finiquito por renuncia puebla | 0 | 4 |
| calculo de finiquito puebla | 0 | 2 |
| finiquito calculadora puebla | 0 | 2 |
| calculadora liquidacion puebla | 0 | 1 |
| calculo de finiquito por renuncia puebla | 0 | 1 |

### Pages

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| `https://herramientaslaborales.com/` | 1 | 1 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla/` | 0 | 46 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla` | 0 | 4 |
| `https://herramientaslaborales.com/privacy-policy/` | 0 | 1 |

### Decision

The next action should be Puebla-focused, not broad expansion. The site is already getting early impressions near page-one/page-two range for several Puebla terms, but clicks have not started. Improve the existing Puebla page first, especially for:

- `calcular finiquito por renuncia puebla`
- `calculo de finiquito por renuncia puebla`
- `calculadora liquidacion puebla`

Do not create a full batch of new city pages from this snapshot alone. Consider a dedicated `calculadora-liquidacion-puebla` page only if the liquidacion query gets repeated impressions in the next GSC review.

### Change made

Updated `calculadora-finiquito-puebla` content with:

- clearer quick answer for renuncia vs despido/liquidacion intent
- a new section about renuncia, despido, and liquidacion in Puebla
- FAQ coverage for finiquito por renuncia in Puebla
- FAQ coverage for users searching liquidacion Puebla

## 2026-07-05

Source: Google Search Console index coverage and performance reports for `sc-domain:herramientaslaborales.com`. Performance range: 3 months, web search. Performance report last updated 2.5 hours before review. Index coverage last updated 2026-06-30.

### Index coverage

- Indexed pages: 4
- Not indexed pages: 10
- Reasons:
  - Page with redirect: 6
  - Redirect error: 3
  - Crawled - currently not indexed: 1

### GSC examples

Page with redirect:

- `http://www.herramientaslaborales.com/`
- `https://herramientaslaborales.com/calculadora-finiquito-puebla`
- `https://herramientaslaborales.com/privacy-policy`
- `https://herramientaslaborales.com/calculadora-finiquito`
- `http://herramientaslaborales.com/`
- `https://www.herramientaslaborales.com/`

Redirect error:

- `https://herramientaslaborales.com/calculadora-aguinaldo`
- `https://herramientaslaborales.com/calculadora-liquidacion`
- `https://herramientaslaborales.com/calculadora-vacaciones`

Crawled - currently not indexed:

- `https://herramientaslaborales.com/disclaimer`

### Live validation

Command-line checks showed these GSC examples now redirect to final 200 URLs:

- `http` and `www` variants redirect to `https://herramientaslaborales.com/`
- no-trailing-slash page variants redirect to the trailing-slash URL
- sitemap only lists final trailing-slash URLs
- `npm run check:seo` passed for 54 HTML pages and 54 sitemap URLs

Decision: no redirect-code change needed. The GSC redirect issues are historical or expected canonicalization signals. Do not submit a validation request without owner confirmation because it is an external action in Search Console.

### Performance summary

- Clicks: 1
- Impressions: 78
- CTR: 1.3%
- Average position: 10.5
- Main signal: Puebla page remains the only meaningful search landing page

### Queries

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| calculadora de finiquito puebla | 0 | 11 |
| calcular finiquito puebla | 0 | 9 |
| calculadora finiquito puebla | 0 | 6 |
| calcular finiquito por renuncia puebla | 0 | 5 |
| calculo de finiquito puebla | 0 | 2 |
| finiquito calculadora puebla | 0 | 2 |
| calculadora liquidacion puebla | 0 | 1 |
| calculo de finiquito por renuncia puebla | 0 | 1 |
| finiquito puebla | 0 | 1 |

### Pages

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| `https://herramientaslaborales.com/` | 1 | 2 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla/` | 0 | 73 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla` | 0 | 4 |
| `https://herramientaslaborales.com/privacy-policy/` | 0 | 1 |

### Change made

The Puebla page was already receiving impressions and ranking near position 10. The next change should target CTR before adding a new page. Updated:

- H1/title from `Calculadora de finiquito Puebla` to `Calculadora de finiquito Puebla 2026`
- meta description to start with `Calcula finiquito en Puebla gratis en MXN`

Monitor for 3-5 days. Create `calculadora-liquidacion-puebla` only if `calculadora liquidacion puebla` continues receiving impressions.
