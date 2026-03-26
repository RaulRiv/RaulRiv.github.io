<script setup lang="ts">
import type { PortfolioSnapshot } from '~/types/portfolio-snapshot'

const props = defineProps<{
  snapshot: PortfolioSnapshot | null
}>()

const { t } = useI18n()

const staticProjects = [
  {
    key: 'backoffice',
    title: 'Backoffice',
    descriptionEs:
      'API REST (FastAPI) y portal web (Vue) para gestionar el ecosistema: usuarios, contenido de la web personal, export de snapshot público y operaciones comunes del hub central.',
    descriptionEn:
      'REST API (FastAPI) and web portal (Vue) to manage the ecosystem: users, personal site content, public snapshot export, and common hub operations.',
    stack: ['Python', 'FastAPI', 'Vue 3', 'TypeScript', 'Vite', 'SQLAlchemy'],
    github: null,
    demo: null,
  },
  {
    key: 'orquestador',
    title: 'Orquestador',
    descriptionEs:
      'Servicio de orquestación y su consola: arranque, build, health checks y despliegue local/docker de los servicios por entorno y tenant.',
    descriptionEn:
      'Orchestration service and console: start, build, health checks, and local/docker deploy of services per environment and tenant.',
    stack: ['Python', 'FastAPI', 'Vue 3', 'TypeScript', 'Vite', 'Docker'],
    github: null,
    demo: null,
  },
  {
    key: 'monitor',
    title: 'Monitor',
    descriptionEs:
      'Observabilidad: API de métricas (FastAPI) y stack Prometheus, Grafana, Loki, Promtail, node-exporter y cAdvisor para métricas, dashboards y logs.',
    descriptionEn:
      'Observability: metrics API (FastAPI) plus Prometheus, Grafana, Loki, Promtail, node-exporter, and cAdvisor for metrics, dashboards, and logs.',
    stack: ['Python', 'FastAPI', 'Prometheus', 'Grafana', 'Loki', 'Promtail', 'node-exporter', 'cAdvisor', 'Docker'],
    github: null,
    demo: null,
  },
  {
    key: 'knowledge-manager',
    title: 'Knowledge manager',
    descriptionEs:
      'Motor de conocimiento del ecosistema: bases de conocimiento, integración planificada vía MCP; servicio knowledge (FastAPI).',
    descriptionEn:
      'Knowledge engine for the ecosystem: knowledge bases, planned MCP integration; knowledge service (FastAPI).',
    stack: ['Python', 'FastAPI', 'Docker'],
    github: null,
    demo: null,
  },
  {
    key: 'portfolio-github-pages',
    title: 'Web personal (GitHub Pages)',
    descriptionEs:
      'Portfolio profesional estático con Nuxt 3: i18n (ES/EN), secciones de proyectos y experiencia, y despliegue automático en la raíz de GitHub Pages vía GitHub Actions.',
    descriptionEn:
      'Static professional portfolio with Nuxt 3: i18n (EN/ES), projects and experience sections, and automated deploy to the GitHub Pages site root via GitHub Actions.',
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
    github: 'https://github.com/RaulRiv/RaulRiv.github.io',
    demo: 'https://raulriv.github.io',
  },
]

const { locale } = useI18n()

const projects = computed(() => {
  const fromSnap = props.snapshot?.projects?.filter(p => p.publicado) ?? []
  if (fromSnap.length) {
    return [...fromSnap]
      .sort((a, b) => a.orden - b.orden)
      .map(p => ({
        key: p.id,
        title: p.titulo,
        descriptionEs: p.descripcion ?? '',
        descriptionEn: (p.descripcion_en ?? p.descripcion) ?? '',
        stack: p.tecnologias,
        github: p.repo,
        demo: p.deploy,
      }))
  }
  return staticProjects
})
</script>

<template>
  <section id="projects" class="py-24">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center gap-4 mb-14">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('projects.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.key"
          class="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-steel-400 dark:hover:border-steel-600 transition-colors"
        >
          <!-- Title -->
          <h3 class="font-semibold text-lg text-zinc-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
            {{ locale === 'es' ? project.descriptionEs : project.descriptionEn }}
          </p>

          <!-- Stack -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded-full bg-steel-50 dark:bg-steel-950 text-steel-700 dark:text-steel-300 border border-steel-200 dark:border-steel-800"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3 mt-auto">
            <UButton
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              icon="i-lucide-github"
              variant="ghost"
              color="neutral"
              size="sm"
            >
              GitHub
            </UButton>
            <UButton
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              icon="i-lucide-external-link"
              variant="ghost"
              color="neutral"
              size="sm"
            >
              Demo
            </UButton>
            <span
              v-if="!project.github && !project.demo"
              class="text-xs text-zinc-400 dark:text-zinc-600 italic self-end"
            >
              {{ locale === 'es' ? 'Proyecto privado' : 'Private project' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
