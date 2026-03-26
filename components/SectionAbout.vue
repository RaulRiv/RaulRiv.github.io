<script setup lang="ts">
const { t } = useI18n()

const education = [
  { title: 'Ing. Software — UPM', sub: 'Madrid · 2018–2023' },
  { title: 'Erasmus — Hanze University', sub: 'Groningen · feb–jun 2022' },
]

const certifications = [
  { title: 'GitLab Certified CI/CD Associate', sub: 'GitLab · ene 2025' },
  { title: 'Deep Learning Specialization', sub: 'Coursera / DeepLearning.AI · nov 2022' },
  { title: 'PTE Academic UKVI — C1', sub: 'Pearson · ago 2023' },
]

const languages = [
  { name: 'Español', level: 'C2 — Nativo' },
  { name: 'English', level: 'C1 — PTE Academic' },
  { name: 'Français', level: 'A2 — Básico' },
]

const stats = [
  { value: '4+', key: 'stat_exp' },
  { value: '5',  key: 'stat_companies' },
  { value: '3',  key: 'stat_certs' },
]
</script>

<template>
  <section id="about" class="py-28 px-6">
    <div class="max-w-5xl mx-auto">

      <!-- Título de sección -->
      <div class="flex items-center gap-3 mb-16">
        <span class="w-8 h-px bg-steel-500" />
        <h2 class="text-sm font-semibold uppercase tracking-widest text-steel-600 dark:text-steel-400">
          {{ t('about.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">

        <!-- Columna izquierda: avatar + stats -->
        <div class="flex flex-col items-center md:items-start gap-8">
          <!-- Avatar placeholder -->
          <div class="w-40 h-40 rounded-2xl bg-gradient-to-br from-steel-100 to-steel-200/80 dark:from-steel-950 dark:to-steel-900 border border-steel-200/90 dark:border-steel-800 flex items-center justify-center shrink-0 shadow-inner">
            <span class="text-6xl font-semibold text-steel-600 dark:text-steel-300 tracking-tight select-none">
              R
            </span>
          </div>

          <!-- Stats -->
          <div class="flex gap-8 md:gap-6">
            <div v-for="stat in stats" :key="stat.key" class="text-center md:text-left">
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ stat.value }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t(`about.${stat.key}`) }}</p>
            </div>
          </div>

          <!-- Intereses -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-2">
              {{ t('about.interests_label') }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t('about.interests_value') }}
            </p>
          </div>
        </div>

        <!-- Columna derecha: bio + formación + certs + idiomas -->
        <div class="space-y-10">
          <!-- Bio -->
          <div class="space-y-4">
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ t('about.bio_1') }}
            </p>
            <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ t('about.bio_2') }}
            </p>
          </div>

          <!-- Formación -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">
              {{ t('about.education_label') }}
            </p>
            <ul class="space-y-3">
              <li v-for="item in education" :key="item.title" class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-steel-400 shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ item.title }}</p>
                  <p class="text-xs text-gray-400 dark:text-gray-500">{{ item.sub }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Certificaciones -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">
              {{ t('about.certs_label') }}
            </p>
            <ul class="space-y-3">
              <li v-for="cert in certifications" :key="cert.title" class="flex items-start gap-3">
                <UIcon name="i-lucide-badge-check" class="w-4 h-4 text-steel-500 shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ cert.title }}</p>
                  <p class="text-xs text-gray-400 dark:text-gray-500">{{ cert.sub }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Idiomas -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">
              {{ t('about.langs_label') }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="lang in languages"
                :key="lang.name"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <span class="font-medium">{{ lang.name }}</span>
                <span class="text-gray-400 dark:text-gray-500">{{ lang.level }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
