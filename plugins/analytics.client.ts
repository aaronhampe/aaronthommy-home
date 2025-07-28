export default defineNuxtPlugin(() => {
  const { cookiesEnabledIds } = useCookieControl()
  if (cookiesEnabledIds.value.includes('analytics')) {
    import('plausible-tracker').then(({ create }) => create('aaronthommy.com'))
  }
})