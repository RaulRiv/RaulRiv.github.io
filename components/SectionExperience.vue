<script setup lang="ts">
const { t, locale } = useI18n()

const experience = [
  {
    company: 'Lacía',
    roleEs: 'DevOps Manager',
    roleEn: 'DevOps Manager',
    periodEs: 'Abr 2025 – Presente',
    periodEn: 'Apr 2025 – Present',
    highlightsEs: [
      'Dirijo operación y soporte de plataforma en Azure para equipos de producto: pipelines (Bitbucket), infra como código con Terraform y cargas en Docker.',
      'Priorizo fiabilidad y cadencia de despliegue: gestión de incidentes, mejora continua y decisiones que reducen riesgo en releases.',
      'Actúo como puente entre ingeniería y negocio: traduzco incidentes y cuellos de botella en planes de acción concretos.',
    ],
    highlightsEn: [
      'Lead Azure platform operations for product teams: Bitbucket pipelines, Terraform-based infrastructure, and Dockerized workloads.',
      'Prioritize reliability and release cadence: incident response, continuous improvement, and changes that reduce deployment risk.',
      'Bridge engineering and stakeholders—turn incidents and bottlenecks into clear, actionable plans.',
    ],
    stack: ['Azure', 'Terraform', 'Docker', 'Bitbucket', 'CI/CD'],
    current: true,
  },
  {
    company: 'Kapsch Trafficom',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'May 2024 – Abr 2025',
    periodEn: 'May 2024 – Apr 2025',
    highlightsEs: [
      'Construí bases de observabilidad en Azure para sistemas de gestión de tráfico: métricas, alertas y dashboards (Prometheus, Grafana).',
      'Apoyé fiabilidad en producción acortando el tiempo hasta detectar degradaciones en servicios críticos.',
      'Mantuve pipelines en GitLab y entornos contenedorizados (Docker/Kubernetes) para releases repetibles.',
    ],
    highlightsEn: [
      'Built observability foundations on Azure for traffic-management systems: metrics, alerts, and Grafana dashboards.',
      'Supported production reliability by improving visibility into service health and degradations.',
      'Maintained GitLab pipelines and containerized workloads (Docker/Kubernetes) for repeatable releases.',
    ],
    stack: ['Azure', 'GitLab', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
    current: false,
  },
  {
    company: 'Bastian PLC',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'Jul 2023 – May 2024',
    periodEn: 'Jul 2023 – May 2024',
    highlightsEs: [
      'Automaticé flujos serverless en AWS para procesos industriales y de facturación con Terraform y GitLab CI.',
      'Enfaticé trazabilidad y fiabilidad en integraciones complejas, reduciendo pasos manuales en despliegues.',
    ],
    highlightsEn: [
      'Automated AWS serverless workflows for industry and billing integrations using Terraform and GitLab CI.',
      'Emphasized traceability and reliability in complex integrations while cutting manual deployment steps.',
    ],
    stack: ['AWS', 'Lambda', 'Terraform', 'GitLab', 'CI/CD'],
    current: false,
  },
  {
    company: 'Telefónica',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'Nov 2022 – Jul 2023',
    periodEn: 'Nov 2022 – Jul 2023',
    highlightsEs: [
      'Desplegué y mantuve infraestructura AWS en innovación 5G: integración de VAS y pipelines críticos.',
      'En OpenGateway lideré pruebas de concepto y acompañamiento a early adopters para acelerar adopción.',
      'Entregué con Jenkins, GitHub y Kubernetes/Docker en entornos de alta exigencia operativa.',
    ],
    highlightsEn: [
      'Delivered and maintained AWS infrastructure for 5G innovation: VAS integration and critical delivery pipelines.',
      'On OpenGateway, ran POCs and early-adopter engagements to speed adoption.',
      'Shipped with Jenkins, GitHub, and Docker/Kubernetes in high-operational-tempo settings.',
    ],
    stack: ['AWS', 'GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
    current: false,
  },
  {
    company: 'The Wise Seeker',
    roleEs: 'DevOps Engineer · Scrum Master',
    roleEn: 'DevOps Engineer · Scrum Master',
    periodEs: 'Abr 2021 – Nov 2022',
    periodEn: 'Apr 2021 – Nov 2022',
    highlightsEs: [
      'Combiné rol de Scrum Master con DevOps en GCP: Kubernetes, Docker y pipelines para un equipo en crecimiento.',
      'Establecí prácticas de observabilidad (ELK) y calidad (Cypress en CI) para feedback rápido en cada iteración.',
      'Coordiné entregas y ceremonias ágiles manteniendo foco en automatización y deuda técnica visible.',
    ],
    highlightsEn: [
      'Combined Scrum Master and DevOps on GCP: Kubernetes, Docker, and CI for a growing team.',
      'Introduced observability (ELK) and quality gates (Cypress in CI) for fast feedback each sprint.',
      'Coordinated delivery and agile ceremonies while driving automation and visible technical debt management.',
    ],
    stack: ['GCP', 'Kubernetes', 'Docker', 'GitHub', 'ELK Stack', 'Cypress'],
    current: false,
  },
]
</script>

<template>
  <section id="experience" class="py-24 bg-zinc-50 dark:bg-zinc-950">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center gap-4 mb-14">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('experience.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Línea vertical -->
        <div class="absolute left-0 md:left-[11.5rem] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

        <div class="space-y-10">
          <div
            v-for="job in experience"
            :key="job.company + job.periodEs"
            class="md:flex gap-8"
          >
            <!-- Fecha (desktop) -->
            <div class="hidden md:block w-44 shrink-0 text-right pt-0.5">
              <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                {{ locale === 'es' ? job.periodEs : job.periodEn }}
              </p>
            </div>

            <!-- Dot -->
            <div class="hidden md:flex items-start justify-center w-6 shrink-0 pt-1">
              <div
                class="w-3 h-3 rounded-full border-2 shrink-0"
                :class="job.current
                  ? 'border-steel-500 bg-steel-500'
                  : 'border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-950'"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 pb-2">
              <!-- Fecha (mobile) -->
              <p class="md:hidden text-xs text-zinc-400 dark:text-zinc-500 mb-1">
                {{ locale === 'es' ? job.periodEs : job.periodEn }}
              </p>

              <div class="flex items-start gap-2 flex-wrap mb-1">
                <h3 class="font-semibold text-zinc-900 dark:text-white">
                  {{ locale === 'es' ? job.roleEs : job.roleEn }}
                </h3>
                <UBadge
                  v-if="job.current"
                  color="success"
                  variant="subtle"
                  size="xs"
                >
                  {{ locale === 'es' ? 'Actual' : 'Current' }}
                </UBadge>
              </div>

              <p class="text-steel-600 dark:text-steel-400 font-medium text-sm mb-3">
                {{ job.company }}
              </p>

              <ul class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3 space-y-2 list-disc pl-4 marker:text-steel-500 dark:marker:text-steel-400">
                <li
                  v-for="(line, idx) in (locale === 'es' ? job.highlightsEs : job.highlightsEn)"
                  :key="idx"
                >
                  {{ line }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in job.stack"
                  :key="tech"
                  class="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
