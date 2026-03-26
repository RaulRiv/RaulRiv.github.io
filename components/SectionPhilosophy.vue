<script setup lang="ts">
const { t } = useI18n()

const pillars = [
  { key: 'value_delivery' },
  { key: 'observability' },
  { key: 'iteration' },
  { key: 'testing' },
  { key: 'documentation' },
  { key: 'judgment' },
] as const
</script>

<template>
  <section id="philosophy" class="py-24 bg-zinc-50 dark:bg-zinc-950">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center gap-4 mb-14">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('philosophy.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="pillar in pillars"
          :key="pillar.key"
          class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6"
        >
          <h3 class="font-semibold text-zinc-900 dark:text-white mb-3">
            {{ t(`philosophy.${pillar.key}.title`) }}
          </h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {{ t(`philosophy.${pillar.key}.body`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
