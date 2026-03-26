<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')

const contactEmailConfigured = computed(
  () => !!(config.public.contactEmail as string)?.trim(),
)

function sendMail() {
  const to = (config.public.contactEmail as string)?.trim()
  if (!to) return
  const subject = encodeURIComponent(
    `${t('contact.mail_subject')} — ${formName.value || 'Portfolio'}`,
  )
  const body = encodeURIComponent(
    `${formMessage.value}\n\n---\n${formEmail.value}`,
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}

const links = [
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    href: 'https://github.com/RaulRiv',
  },
  {
    label: 'LinkedIn',
    icon: 'i-lucide-linkedin',
    href: 'https://www.linkedin.com/in/raulriveromatesanz',
  },
]
</script>

<template>
  <section id="contact" class="py-24 bg-zinc-50 dark:bg-zinc-950">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center gap-4 mb-14">
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {{ t('contact.title') }}
        </h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <!-- Card central -->
      <div class="max-w-lg mx-auto text-center">
        <p class="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          {{ t('contact.intro') }}
        </p>

        <form
          class="text-left space-y-4 mb-10 max-w-md mx-auto"
          @submit.prevent="sendMail"
        >
          <UFormField :label="t('contact.name')">
            <UInput v-model="formName" autocomplete="name" class="w-full" />
          </UFormField>
          <UFormField :label="t('contact.email')">
            <UInput v-model="formEmail" type="email" autocomplete="email" class="w-full" />
          </UFormField>
          <UFormField :label="t('contact.message')">
            <UTextarea v-model="formMessage" :rows="4" class="w-full" autoresize />
          </UFormField>
          <UButton type="submit" block color="primary" :disabled="!contactEmailConfigured">
            {{ t('contact.send') }}
          </UButton>
          <p v-if="!contactEmailConfigured" class="text-xs text-amber-600 dark:text-amber-500 text-center">
            {{ t('contact.email_not_configured') }}
          </p>
          <p v-else class="text-xs text-zinc-400 text-center">
            {{ t('contact.mailto_hint') }}
          </p>
        </form>

        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <UButton
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            :icon="link.icon"
            color="neutral"
            variant="outline"
            size="lg"
          >
            {{ link.label }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
