import type { PortfolioSnapshot } from '~/types/portfolio-snapshot'

export function usePortfolioSnapshot() {
  const config = useRuntimeConfig()

  return useAsyncData(
    'portfolio-snapshot',
    async (): Promise<PortfolioSnapshot | null> => {
      const remote = (config.public.snapshotUrl as string)?.trim()
      if (remote) {
        try {
          return await $fetch<PortfolioSnapshot>(remote)
        } catch {
          return null
        }
      }
      try {
        return await $fetch<PortfolioSnapshot>('/snapshot.json')
      } catch {
        return null
      }
    },
    { default: () => null },
  )
}
