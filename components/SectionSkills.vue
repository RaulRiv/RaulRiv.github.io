<script setup lang="ts">
const { t, locale } = useI18n()

const techCategories = [
  {
    nameEs: 'Cloud',
    nameEn: 'Cloud',
    icon: 'i-lucide-cloud',
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    nameEs: 'Infra como código',
    nameEn: 'Infrastructure as code',
    icon: 'i-lucide-layers',
    skills: ['Terraform', 'Ansible', 'Packer'],
  },
  {
    nameEs: 'Contenedores',
    nameEn: 'Containers',
    icon: 'i-lucide-box',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    nameEs: 'Monitoring',
    nameEn: 'Monitoring',
    icon: 'i-lucide-activity',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix'],
  },
  {
    nameEs: 'Lenguajes',
    nameEn: 'Languages',
    icon: 'i-lucide-code-2',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Scala', 'Java'],
  },
]

const methodologyItems = [
  { key: 'agile' as const, icon: 'i-lucide-zap' },
  { key: 'scrum' as const, icon: 'i-lucide-clipboard-list' },
  { key: 'cicd' as const, icon: 'i-lucide-git-branch' },
  { key: 'code_review' as const, icon: 'i-lucide-git-pull-request' },
]
</script>

<template>
  <section id="stack" class="py-24">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center gap-4 mb-6">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('stack.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <p class="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-10">
        {{ t('stack.tech_subtitle') }}
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="cat in techCategories"
          :key="cat.nameEn"
          class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6"
        >
          <div class="flex items-center gap-2.5 mb-4">
            <UIcon :name="cat.icon" class="w-5 h-5 text-steel-500 shrink-0" />
            <h3 class="font-semibold text-zinc-900 dark:text-white">
              {{ locale === 'es' ? cat.nameEs : cat.nameEn }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <p class="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-8">
        {{ t('stack.methods_subtitle') }}
      </p>

      <div class="relative max-w-4xl mx-auto">
        <div
          class="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-steel-500/[0.07] via-transparent to-zinc-300/20 dark:from-steel-400/[0.06] dark:to-zinc-800/40 blur-2xl"
          aria-hidden="true"
        />
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div
            v-for="item in methodologyItems"
            :key="item.key"
            class="group flex flex-col items-center text-center rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50/90 dark:from-zinc-900 dark:to-zinc-950/90 px-5 py-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-steel-300/60 dark:hover:border-steel-600/50 hover:from-white hover:to-steel-50/40 dark:hover:to-steel-950/30"
          >
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-steel-500/10 text-steel-600 ring-1 ring-steel-500/15 transition-transform duration-300 group-hover:scale-105 dark:bg-steel-400/10 dark:text-steel-300 dark:ring-steel-400/20"
            >
              <UIcon :name="item.icon" class="w-7 h-7" />
            </div>
            <p class="text-sm font-semibold leading-snug text-zinc-900 dark:text-white">
              {{ t(`stack.methodology.${item.key}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
