<script setup lang="ts">
const { t, locale } = useI18n()

const experience = [
  {
    company: 'Lacía',
    roleEs: 'DevOps Manager',
    roleEn: 'DevOps Manager',
    periodEs: 'Abr 2025 – Presente',
    periodEn: 'Apr 2025 – Present',
    descriptionEs:
      'Soporte y operación de la plataforma cloud en Azure: pipelines, despliegues, incidentes y mejora continua para que el equipo pueda entregar con estabilidad. Stack habitual: Azure, Terraform, Docker, Bitbucket.',
    descriptionEn:
      'Platform support and operations on Azure: pipelines, deployments, incidents, and continuous improvement so the team can ship reliably. Typical stack: Azure, Terraform, Docker, Bitbucket.',
    stack: ['Azure', 'Terraform', 'Docker', 'Bitbucket'],
    current: true,
  },
  {
    company: 'Kapsch Trafficom',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'May 2024 – Abr 2025',
    periodEn: 'May 2024 – Apr 2025',
    descriptionEs:
      'Entornos en Azure para sistemas de gestión de tráfico, con foco en observabilidad: métricas, alertas y fiabilidad de servicios en producción.',
    descriptionEn:
      'Azure environments for traffic management systems, with a focus on observability: metrics, alerts, and production service reliability.',
    stack: ['Azure', 'GitLab', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
    current: false,
  },
  {
    company: 'Bastian PLC',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'Jul 2023 – May 2024',
    periodEn: 'Jul 2023 – May 2024',
    descriptionEs:
      'Automatización en arquitectura serverless en AWS: integración de flujos de negocio complejos de la industria y procesos de facturación, con énfasis en fiabilidad y trazabilidad.',
    descriptionEn:
      'Automation on AWS serverless architectures: integrating complex industry business flows and billing processes, with emphasis on reliability and traceability.',
    stack: ['AWS', 'Lambda', 'Terraform', 'GitLab'],
    current: false,
  },
  {
    company: 'Telefónica',
    roleEs: 'DevOps Engineer',
    roleEn: 'DevOps Engineer',
    periodEs: 'Nov 2022 – Jul 2023',
    periodEn: 'Nov 2022 – Jul 2023',
    descriptionEs:
      'Infraestructura en AWS en innovación 5G: integración de VAS y pipelines críticas; posteriormente en OpenGateway, con pruebas de concepto y adopción temprana junto a early adopters.',
    descriptionEn:
      'AWS infrastructure in 5G innovation: integrating VAS and critical pipelines; later on OpenGateway, running POCs and early adopter engagements.',
    stack: ['AWS', 'GitHub', 'Jenkins', 'Docker', 'Kubernetes'],
    current: false,
  },
  {
    company: 'The Wise Seeker',
    roleEs: 'DevOps Engineer · Scrum Master',
    roleEn: 'DevOps Engineer · Scrum Master',
    periodEs: 'Abr 2021 – Nov 2022',
    periodEn: 'Apr 2021 – Nov 2022',
    descriptionEs:
      'Primera experiencia profesional en startup de recruiting: DevOps y Scrum Master. Infraestructura en GCP y Kubernetes, automatización y coordinación de entregas.',
    descriptionEn:
      'First role at a recruiting startup: DevOps and Scrum Master. Infrastructure on GCP and Kubernetes, automation, and delivery coordination.',
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

              <p class="text-steel-600 dark:text-steel-400 font-medium text-sm mb-2">
                {{ job.company }}
              </p>

              <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                {{ locale === 'es' ? job.descriptionEs : job.descriptionEn }}
              </p>

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
