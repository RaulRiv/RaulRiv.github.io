<script setup lang="ts">
const { t } = useI18n()

const points = [1, 2, 3, 4, 5, 6] as const
</script>

<template>
  <section id="value" class="py-20 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex items-center gap-3 mb-10">
        <span class="w-8 h-px bg-steel-500" />
        <h2 class="text-sm font-semibold uppercase tracking-widest text-steel-600 dark:text-steel-400">
          {{ t('value.title') }}
        </h2>
      </div>
      <ul class="grid sm:grid-cols-2 gap-x-10 gap-y-4">
        <li
          v-for="n in points"
          :key="n"
          class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <span class="mt-2 w-1.5 h-1.5 rounded-full bg-steel-500 shrink-0" />
          <span>{{ t(`value.point_${n}`) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
