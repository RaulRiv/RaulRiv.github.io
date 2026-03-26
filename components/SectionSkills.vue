<script setup lang="ts">
const { t, locale } = useI18n()

/** Ordered for ATS: cloud → automation → runtime → delivery → observability → languages */
const techCategories = [
  {
    nameEs: 'Cloud',
    nameEn: 'Cloud platforms',
    icon: 'i-lucide-cloud',
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    nameEs: 'IaC e infraestructura',
    nameEn: 'IaC & infrastructure',
    icon: 'i-lucide-layers',
    skills: ['IaC', 'Terraform', 'Ansible', 'Packer'],
  },
  {
    nameEs: 'Contenedores',
    nameEn: 'Containers & orchestration',
    icon: 'i-lucide-box',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    nameEs: 'CI/CD y Git',
    nameEn: 'CI/CD & Git',
    icon: 'i-lucide-git-branch',
    skills: ['GitLab', 'GitHub', 'Bitbucket', 'Jenkins', 'GitHub Actions'],
  },
  {
    nameEs: 'Observabilidad',
    nameEn: 'Observability & monitoring',
    icon: 'i-lucide-activity',
    skills: ['Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Zabbix'],
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
  { key: 'cicd' as const, icon: 'i-lucide-workflow' },
  { key: 'iac' as const, icon: 'i-lucide-layers' },
  { key: 'terraform' as const, icon: 'i-lucide-blocks' },
  { key: 'blameless' as const, icon: 'i-lucide-heart-pulse' },
  { key: 'sre_culture' as const, icon: 'i-lucide-shield-check' },
  { key: 'shift_left' as const, icon: 'i-lucide-scan-search' },
] as const
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

      <p class="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
        {{ t('stack.methods_subtitle') }}
      </p>

      <div class="relative max-w-5xl mx-auto">
        <div
          class="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-steel-500/[0.06] via-transparent to-zinc-300/15 dark:from-steel-400/[0.05] dark:to-zinc-800/35 blur-xl"
          aria-hidden="true"
        />
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2.5 sm:gap-3">
          <div
            v-for="item in methodologyItems"
            :key="item.key"
            class="group flex flex-col items-center text-center rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50/80 dark:from-zinc-900 dark:to-zinc-950/90 px-2.5 py-3.5 sm:px-3 sm:py-4 shadow-sm transition-all duration-200 hover:border-steel-300/50 dark:hover:border-steel-600/45 hover:shadow-md"
          >
            <div
              class="mb-2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-steel-500/10 text-steel-600 ring-1 ring-steel-500/12 dark:bg-steel-400/10 dark:text-steel-300 dark:ring-steel-400/18"
            >
              <UIcon :name="item.icon" class="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" />
            </div>
            <p class="text-[0.7rem] sm:text-xs font-semibold leading-tight text-zinc-900 dark:text-white px-0.5">
              {{ t(`stack.methodology.${item.key}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
