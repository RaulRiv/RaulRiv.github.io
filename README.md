# Portfolio — Raúl Rivero

Sitio estático con [Nuxt 3](https://nuxt.com/). Los datos de proyectos pueden venir de `public/snapshot.json` o de una URL configurada.

## Requisitos

- Node.js 22 (recomendado; ver workflow de CI)

## Desarrollo

```bash
npm ci
npm run dev
```

Vista previa tras build: `npm run build` y `npm run preview` (o `npm run preview:local` en puerto 3000).

Generación estática (misma salida que GitHub Pages):

```bash
npm run generate
```

Los archivos quedan en `.output/public`.

## Despliegue en GitHub Pages

1. En el repositorio: **Settings → Pages → Build: GitHub Actions**.
2. El workflow [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) calcula `NUXT_PUBLIC_SITE_URL` automáticamente si el repo se llama `<usuario>.github.io` (raíz del sitio).

### Variables de entorno en Actions

En **Settings → Secrets and variables → Actions → Variables** puedes definir:

| Variable | Descripción |
|----------|-------------|
| `NUXT_PUBLIC_CONTACT_EMAIL` | Email destino del formulario de contacto (mailto). Si no está definida, el envío queda deshabilitado y se muestra un aviso. |
| `NUXT_PUBLIC_CV_URL` | Ruta o URL del CV (p. ej. `/cv.pdf` si añades el PDF en `public/`). Si está vacía, el botón «Descargar CV» no se muestra. |

Copia local: [`.env.example`](./.env.example).

## Otras variables (Vercel u otros)

| Variable | Uso |
|----------|-----|
| `NUXT_PUBLIC_SITE_URL` | URL canónica (og, sitemap). En Pages suele inyectarla el workflow. |
| `NUXT_PUBLIC_SNAPSHOT_URL` | JSON remoto de portfolio; si está vacío se usa `public/snapshot.json`. |

## Licencia

MIT — ver [LICENSE](./LICENSE).

---

### Notas de desarrollo (SSR local en Windows)

Tras `npm run build`, no ejecutes a mano `node .nuxt/dist/server/server.mjs` (rutas absolutas tipo `E:/...`). Usa `npm run dev`, `npm run preview` o `npm start` (`node .output/server/index.mjs`).

Para regenerar `public/snapshot.json` desde un backoffice con API, en el entorno del orquestador: `python cli.py portfolio-snapshot` (variables opcionales `BACKOFFICE_API_BASE`, `PORTFOLIO_SNAPSHOT_PATH`).
