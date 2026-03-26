export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const base = (config.public.siteUrl as string)?.replace(/\/$/, '') || ''

  const urls = ['/', '/en/'].map(
    (path) => `  <url><loc>${base || 'https://example.com'}${path}</loc></url>`,
  )

  event.node.res.setHeader('content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`
})
