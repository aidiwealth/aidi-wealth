// plugins/intercom.client.ts
// Mirrors the Intercom widget initialization from the source HTML.
// Uses the `.client.ts` suffix so it only loads on the client.

export default defineNuxtPlugin(() => {
  // @ts-ignore — Intercom attaches dynamic globals to window
  window.intercomSettings = {
    api_base: 'https://api-iam.intercom.io',
    app_id: 'vt8ulx74'
  }

  ;(function () {
    const w = window as any
    const ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', w.intercomSettings)
    } else {
      const d = document
      const i: any = function () { i.c(arguments) }
      i.q = []
      i.c = function (args: any) { i.q.push(args) }
      w.Intercom = i

      const l = function () {
        const s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://widget.intercom.io/widget/vt8ulx74'
        const x = d.getElementsByTagName('script')[0]
        x.parentNode!.insertBefore(s, x)
      }

      if (document.readyState === 'complete') {
        l()
      } else if ((w as any).attachEvent) {
        ;(w as any).attachEvent('onload', l)
      } else {
        w.addEventListener('load', l, false)
      }
    }
  })()
})
