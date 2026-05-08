// plugins/cal.client.ts
// Mirrors the Cal.com embed initialization from the source HTML.
// `.client.ts` suffix ensures it only runs in the browser (no SSR errors).
//
// The page's "Talk to us" button uses these data attributes which the
// Cal.com embed script auto-binds to:
//   data-cal-link="joinaidi/30min"
//   data-cal-namespace="30min"
//   data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'

export default defineNuxtPlugin(() => {
  // Type-loose call — Cal is dynamically attached to window.
  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar) }
    const d = C.document
    C.Cal = C.Cal || function () {
      const cal = C.Cal
      const ar = arguments
      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        d.head.appendChild(d.createElement('script')).src = A
        cal.loaded = true
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments) } as any
        const namespace = ar[1]
        api.q = api.q || []
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api
          p(cal.ns[namespace], ar)
          p(cal, ['initNamespace', namespace])
        } else {
          p(cal, ar)
        }
        return
      }
      p(cal, ar)
    }
  })(window, 'https://app.cal.com/embed/embed.js', 'init')

  // @ts-ignore — runtime API attached above
  window.Cal('init', '30min', { origin: 'https://app.cal.com' })
  // @ts-ignore
  window.Cal.ns['30min']('ui', {
    cssVarsPerTheme: {
      light: { 'cal-brand': '#0c2057' },
      dark: { 'cal-brand': '#f5f2ec' }
    },
    hideEventTypeDetails: false,
    layout: 'month_view'
  })
})
