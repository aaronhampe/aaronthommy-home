// plugins/plausible.client.ts
import Plausible from 'plausible-tracker'
export default defineNuxtPlugin(() => {
  const cc = useCookieControl()

  // erst prüfen, ob das Array existiert & Consent schon erteilt wurde
  if (cc.cookiesEnabledIds.value?.includes('analytics')) {
    const { enableAutoPageviews } = Plausible({ domain: 'aaronthommy.com' })
    enableAutoPageviews()
  }

  // nachträgliches Opt-In abfangen
  watch(cc.cookiesEnabledIds, (curr, prev) => {
    if (!prev?.includes('analytics') && curr?.includes('analytics')) {
      import('plausible-tracker').then(({ default: p }) => {
        p({ domain: 'aaronthommy.com' }).enableAutoPageviews()
      })
    }
  })
})
