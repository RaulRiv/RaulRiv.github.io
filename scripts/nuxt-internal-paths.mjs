/**
 * Shim para `#internal/nuxt/paths` cuando Node resuelve imports desde el bundle
 * intermedio `.nuxt/dist/server/server.mjs` (p. ej. al ejecutarlo con `node` a pelo).
 *
 * Flujo recomendado: `npm run dev`, `npm run preview` o `npm start` (`.output/server/index.mjs`).
 */
export function baseURL() {
  if (process.env.NUXT_APP_BASE_URL) {
    return process.env.NUXT_APP_BASE_URL;
  }
  const site = process.env.NUXT_PUBLIC_SITE_URL;
  if (site && typeof site === "string") {
    return site.replace(/\/$/, "");
  }
  return "";
}

export function buildAssetsURL(path) {
  const base = process.env.NUXT_APP_CDN_URL || "";
  const p = typeof path === "string" ? path : "";
  if (!base) return p;
  return `${base.replace(/\/$/, "")}/${p.replace(/^\//, "")}`;
}
