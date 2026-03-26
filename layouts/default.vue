<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

function toggleLocale() {
  setLocale(locale.value === 'es' ? 'en' : 'es')
}

const mobileOpen = ref(false)
const scrolled = ref(false)

const navItems = computed(() => [
  { label: t('nav.about'),      href: '#about' },
  { label: t('nav.projects'),   href: '#projects' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.stack'),      href: '#stack' },
  { label: t('nav.philosophy'), href: '#philosophy' },
  { label: t('nav.contact'),    href: '#contact' },
])

function handleNavClick() {
  mobileOpen.value = false
}

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 24 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

    <!-- ── Header ──────────────────────────────────────────────────────────── -->
    <header
      class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 transition-all duration-300"
      :class="scrolled
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/60 shadow-sm'
        : 'bg-transparent'"
    >
      <!-- Logo -->
      <a
        href="#"
        class="font-semibold text-base tracking-tight text-gray-900 dark:text-white hover:text-steel-500 dark:hover:text-steel-400 transition-colors mr-auto"
        @click.prevent="mobileOpen = false"
      >
        Raúl Rivero
      </a>

      <!-- Nav desktop -->
      <nav class="hidden md:flex items-center gap-1 mx-auto">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="ml-auto flex items-center gap-1">
        <!-- Lang toggle -->
        <button
          class="px-2.5 py-1 text-xs font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors tracking-wider"
          @click="toggleLocale"
        >
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>

        <!-- Dark mode toggle -->
        <UButton
          :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
          variant="ghost"
          color="neutral"
          size="sm"
          @click="toggleColorMode"
        />

        <!-- Mobile hamburger -->
        <UButton
          :icon="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          variant="ghost"
          color="neutral"
          size="sm"
          class="md:hidden"
          @click="mobileOpen = !mobileOpen"
        />
      </div>
    </header>

    <!-- ── Mobile menu ─────────────────────────────────────────────────────── -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-1"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-steel-500 dark:hover:text-steel-400 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-0"
          @click="handleNavClick"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>

    <!-- ── Main ───────────────────────────────────────────────────────────── -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- ── Footer ─────────────────────────────────────────────────────────── -->
    <footer class="border-t border-gray-100 dark:border-gray-800 py-10 px-6">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-gray-400 dark:text-gray-600">
          © {{ new Date().getFullYear() }} Raúl Rivero · {{ $t('footer.rights') }}
        </p>

        <div class="flex items-center gap-3">
          <a
            href="https://github.com/RaulRiv"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <UIcon name="i-simple-icons-github" class="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/raulriveromatesanz"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 dark:text-gray-600 hover:text-steel-500 dark:hover:text-steel-400 transition-colors"
            aria-label="LinkedIn"
          >
            <UIcon name="i-simple-icons-linkedin" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>
