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

## 2026-07-08

Source: Google Search Console performance, index coverage, and sitemap reports for `sc-domain:herramientaslaborales.com`. Performance range: 3 months, web search. Performance report last updated 3.5 hours before review. Index coverage report still last updated 2026-06-30.

### Performance summary

- Clicks: 1
- Impressions: 94
- CTR: 1.1%
- Average position: 11.6
- Main signal: Puebla page still drives nearly all impressions

### Queries

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| calculadora de finiquito puebla | 0 | 14 |
| calcular finiquito puebla | 0 | 10 |
| calculadora finiquito puebla | 0 | 9 |
| calcular finiquito por renuncia puebla | 0 | 5 |
| finiquito puebla | 0 | 3 |
| calculo de finiquito puebla | 0 | 2 |
| finiquito calculadora puebla | 0 | 2 |
| calculadora liquidacion puebla | 0 | 1 |
| calculo de finiquito por renuncia puebla | 0 | 1 |
| calculadora de finiquito 2026 | 0 | 1 |

### Pages

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| `https://herramientaslaborales.com/` | 1 | 2 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla/` | 0 | 88 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla` | 0 | 4 |
| `https://herramientaslaborales.com/privacy-policy/` | 0 | 1 |
| `https://herramientaslaborales.com/calculadora-finiquito/` | 0 | 1 |

### Index and sitemap

- Index coverage remains stale: last update is still 2026-06-30.
- Indexed pages: 4.
- Not indexed pages: 10.
- Reasons unchanged: page with redirect 6, redirect error 3, crawled - currently not indexed 1.
- Sitemap report: `https://herramientaslaborales.com/sitemap.xml` was last read 2026-06-21, status success, discovered pages 54.
- Live sitemap response is 200 XML and was last modified 2026-07-05.

### Decision

No code change needed on 2026-07-08.

- The latest performance data confirms the site is still in early-discovery mode.
- The CTR is still low, but the previous Puebla title/meta change is too recent to judge.
- The only new non-Puebla query is `calculadora de finiquito 2026`, and the main calculator already targets that exact intent.
- `calculadora liquidacion puebla` is still only 1 impression, so a dedicated liquidacion Puebla page is not justified yet.
- Do not click "validate fix" in GSC without owner approval; it is an external Search Console action.

Next review: wait 3-5 days and check whether Puebla impressions pass 120-150 and whether CTR remains near zero. If yes, consider a second Puebla SERP-title test or a dedicated `calculadora-liquidacion-puebla` page only if liquidacion impressions repeat.

## 2026-07-11

Source: Google Search Console performance and index coverage reports for `sc-domain:herramientaslaborales.com`. Performance range: 3 months, web search. Performance report last updated 4 hours before review. Index coverage report still last updated 2026-06-30.

### Performance summary

- Clicks: 1
- Impressions: 120
- CTR: 0.8%
- Average position: 11.7
- Main signal: Puebla page remains the only meaningful page with search demand

### Queries

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| calculadora de finiquito puebla | 0 | 21 |
| calcular finiquito puebla | 0 | 12 |
| calculadora finiquito puebla | 0 | 10 |
| calcular finiquito por renuncia puebla | 0 | 7 |
| calculo de finiquito puebla | 0 | 3 |
| finiquito puebla | 0 | 3 |
| calculo de finiquito por renuncia puebla | 0 | 2 |
| finiquito calculadora puebla | 0 | 2 |
| calculadora de finiquito 2026 | 0 | 2 |
| calculadora liquidacion puebla | 0 | 1 |

### Pages

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| `https://herramientaslaborales.com/` | 1 | 2 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla/` | 0 | 113 |
| `https://herramientaslaborales.com/calculadora-finiquito-puebla` | 0 | 4 |
| `https://herramientaslaborales.com/calculadora-finiquito/` | 0 | 2 |
| `https://herramientaslaborales.com/privacy-policy/` | 0 | 1 |

### Index coverage

- Index coverage remains stale: last update is still 2026-06-30.
- Indexed pages: 4.
- Not indexed pages: 10.
- Reasons unchanged: page with redirect 6, redirect error 3, crawled - currently not indexed 1.

### Decision

The agile trigger was met: impressions reached 120 while CTR stayed below 1%. Triggered the second Puebla SERP-copy test.

Changed Puebla page copy:

- H1/title base from `Calculadora de finiquito Puebla 2026` to `Calculadora de Finiquito en Puebla 2026`
- meta description from `Calcula finiquito en Puebla gratis en MXN...` to `Quieres una estimacion de tu finiquito o liquidacion en Puebla? Calcula proporcionales segun la LFT 2026 de forma facil, con notas y fuentes oficiales.`

No independent liquidacion Puebla page yet. `calculadora liquidacion puebla` is still only 1 impression.

Next review: wait 3-5 days and compare Puebla CTR and average position against this checkpoint.
