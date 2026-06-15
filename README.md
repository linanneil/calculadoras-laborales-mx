# Calculadoras Laborales MX

Sitio estatico en Astro para estimar pagos laborales comunes en Mexico: finiquito, liquidacion, aguinaldo, vacaciones proporcionales y salario diario integrado.

El sitio esta pensado para publicarse en GitHub Pages con dominio propio, SEO tecnico basico y contenido informativo apto para una revision inicial de Search Console y AdSense.

## Estado del MVP

- 21 paginas estaticas: homepage, 5 calculadoras, 10 guias SEO y 5 paginas legales.
- Calculadoras cliente-side en TypeScript, sin guardar datos del usuario.
- Sitemap, robots.txt, canonical, Open Graph y FAQ JSON-LD.
- Workflow de GitHub Pages con `npm ci`, tests y build.
- Product Design QA documentado en `design-qa.md`.

## Comandos

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

Servidor local por defecto:

```text
http://127.0.0.1:4321/
```

## Configuracion para GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube este proyecto al repositorio.
3. En GitHub, ve a `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. En `Settings > Secrets and variables > Actions > Variables`, crea o ajusta:

```text
SITE_URL=https://tu-dominio.com
BASE_PATH=/
```

Si aun no tienes dominio, puedes usar temporalmente la URL de GitHub Pages:

```text
SITE_URL=https://usuario.github.io
BASE_PATH=/repositorio
```

El valor de `SITE_URL` alimenta:

- `astro.config.mjs`
- canonical URLs
- `sitemap.xml`
- `robots.txt`

## Dominio propio

Cuando compres el dominio:

1. En `Settings > Pages > Custom domain`, escribe el dominio.
2. Crea los registros DNS que GitHub Pages indique.
3. Activa `Enforce HTTPS` cuando GitHub lo permita.
4. Cambia `SITE_URL` al dominio final.
5. Cambia `BASE_PATH` a `/`.
6. Vuelve a ejecutar el workflow.

Para un dominio apex como `example.com`, GitHub Pages suele requerir registros `A`. Para un subdominio como `www.example.com`, suele usarse `CNAME`. Sigue la pantalla de GitHub Pages para evitar valores obsoletos.

## Search Console

Despues de publicar:

1. Agrega la propiedad del dominio en Google Search Console.
2. Verifica propiedad por DNS.
3. Envia:

```text
https://tu-dominio.com/sitemap.xml
```

4. Solicita inspeccion inicial para:

- `/`
- `/calculadora-finiquito`
- `/calculadora-liquidacion`
- `/calculadora-aguinaldo`
- `/calculadora-vacaciones`
- `/calculadora-sueldo-diario-integrado`

## QA antes de publicar

Ejecuta:

```sh
npm test
npm run build
npm audit --omit=dev
```

Revisa manualmente:

- Las 5 calculadoras en movil y desktop.
- About, Contact, Privacy Policy, Terms y Disclaimer.
- Que `sitemap.xml` use el dominio correcto.
- Que los enlaces a fuentes oficiales abran.
- Que no haya texto en ingles visible salvo nombres tecnicos inevitables.

## AdSense

No conviene activar publicidad en el primer despliegue. Primero:

1. Publica el sitio.
2. Envia sitemap a Search Console.
3. Espera indexacion y primeras impresiones.
4. Revisa consultas reales y mejora contenido.
5. Solicita AdSense cuando el sitio tenga contenido suficiente, navegacion clara y politicas visibles.

Los espacios publicitarios estan reservados en el componente `src/components/AdPlaceholder.astro`.

## Fuentes editoriales

El contenido usa referencias publicas como base:

- Ley Federal del Trabajo, Camara de Diputados.
- PROFEDET.
- CONASAMI salarios minimos 2026.

Los calculos son estimaciones informativas y no sustituyen asesoria legal, fiscal o contable.
