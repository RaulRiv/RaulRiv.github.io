<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const cvUrl = computed(() => (config.public.cvUrl as string)?.trim() || '')
</script>

<template>
  <section
    class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-6"
  >
    <!-- Fondo: gradiente radial sutil con color steel -->
    <div
      class="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07] dark:opacity-[0.10] blur-3xl bg-steel-400"
      />
    </div>

    <!-- Contenido -->
    <div class="max-w-3xl w-full text-center">
      <!-- Chip de rol -->
      <div class="flex items-start justify-center gap-2 mb-6 max-w-2xl mx-auto px-4">
        <span class="w-1.5 h-1.5 rounded-full bg-steel-500 animate-pulse shrink-0 mt-1.5" />
        <span class="text-xs sm:text-sm font-medium text-steel-600 dark:text-steel-400 tracking-wide text-center sm:text-left leading-snug">
          {{ t('hero.role') }}
        </span>
      </div>

      <!-- Nombre -->
      <h1 class="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-6">
        Raúl
        <span class="text-steel-500 dark:text-steel-400">Rivero</span>
      </h1>

      <!-- Tagline -->
      <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
        {{ t('hero.tagline') }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <UButton
          :label="t('hero.cta_projects')"
          to="#projects"
          color="primary"
          size="lg"
          icon="i-lucide-arrow-down"
          trailing
        />
        <UButton
          :label="t('hero.cta_contact')"
          to="#contact"
          color="neutral"
          variant="outline"
          size="lg"
        />
        <UButton
          v-if="cvUrl"
          :label="t('hero.cta_cv')"
          :href="cvUrl"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          size="lg"
          icon="i-lucide-file-text"
        />
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 dark:text-gray-700">
      <span class="text-xs tracking-widest uppercase">scroll</span>
      <UIcon name="i-lucide-chevrons-down" class="w-4 h-4 animate-bounce" />
    </div>
  </section>
</template>
