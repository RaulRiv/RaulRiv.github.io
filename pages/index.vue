<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()

const { data: snapshot } = await usePortfolioSnapshot()

const siteUrl = (config.public.siteUrl as string)?.replace(/\/$/, '') || ''

useHead({
  title: 'Raúl Rivero — Portfolio',
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Raúl Rivero — Portfolio' },
    { property: 'og:description', content: t('meta.description') },
    ...(siteUrl ? [{ property: 'og:url', content: `${siteUrl}/` }] : []),
  ],
  ...(siteUrl ? { link: [{ rel: 'canonical', href: `${siteUrl}/` }] } : {}),
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionAbout />
    <SectionProjects :snapshot="snapshot" />
    <SectionExperience />
    <SectionSkills />
    <SectionPhilosophy />
    <SectionContact />
  </div>
</template>
