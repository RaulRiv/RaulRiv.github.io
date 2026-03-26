<script setup lang="ts">
import type { PortfolioSnapshot } from '~/types/portfolio-snapshot'

const { t } = useI18n()

const props = defineProps<{
  snapshot: PortfolioSnapshot | null
}>()

const posts = computed(() => {
  const b = props.snapshot?.blog ?? []
  return [...b].filter(p => p.publicado).sort((a, b) => {
    const da = a.fecha ? new Date(a.fecha).getTime() : 0
    const db = b.fecha ? new Date(b.fecha).getTime() : 0
    return db - da
  })
})
</script>

<template>
  <section id="blog" class="py-24">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center gap-4 mb-14">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('blog.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <p
        v-if="!posts.length"
        class="text-center text-zinc-500 dark:text-zinc-400 text-sm"
      >
        {{ t('blog.empty') }}
      </p>

      <div v-else class="grid md:grid-cols-2 gap-6">
        <article
          v-for="post in posts"
          :key="post.id"
          class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-2"
        >
          <p v-if="post.fecha" class="text-xs text-zinc-400">
            {{ post.fecha }}
          </p>
          <h3 class="font-semibold text-lg text-zinc-900 dark:text-white">
            {{ post.titulo }}
          </h3>
          <p v-if="post.resumen" class="text-sm text-zinc-500 dark:text-zinc-400 flex-1">
            {{ post.resumen }}
          </p>
          <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 pt-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
