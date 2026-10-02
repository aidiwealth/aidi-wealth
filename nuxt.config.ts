// nuxt.config.ts
// SEE: https://nuxt.com/docs/api/configuration/nuxt-config

const FAVICON_DATA_URI = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2025675.8%2023448.1%22%3E%3Cdefs%3E%3Cstyle%3E.fl0%7Bfill%3A%230c2057%7D.fl1%7Bfill%3A%230c2057%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%3E%3Cpath%20class%3D%22fl0%22%20d%3D%22M23266.6%2014962.5c7.4%2C9.7%2017.8%2C11.9%2021.6%2C29.5l466.9%201086.6c251.8%2C922.3%20129.4%2C1643.7%20-247.7%2C2482.8l-998.8%201178.4c-246.2%2C185.5%20-509.8%2C353.6%20-796.5%2C463.1%20-1150%2C439%20-2154.1%2C347.4%20-3203.2%2C-293.6l-464%20-365.1c-26.8%2C-151.2%20-762.4%2C-673.1%20-882.4%2C-768.7%20-1008.7%2C-803.6%20-2339.6%2C-1916.5%20-3326.1%2C-2668.3l-2116.4%20-1701.8c-863.1%2C-678%20-2253.6%2C-1912.9%20-3191.5%2C-2383%20-545.5%2C-273.4%20-1354.2%2C-522.4%20-1987.2%2C-571%20-265.2%2C-20.3%20-603%2C-0.7%20-876.9%2C-2.3%20-1194%2C-6.9%20-2484.2%2C562.2%20-3398.3%2C1259.8%20-1177.7%2C898.8%20-1773.4%2C2029.9%20-2130.6%2C3443.9%20-315.9%2C1251%20-66.6%2C3148.9%20610.9%2C4262.5%20458.3%2C753.3%20879%2C1293.4%201602%2C1834.4%202691.1%2C2013.6%206325%2C1431.2%208302.2%2C-1309%20473.8%2C-656.6%20888.8%2C-1600%20970.6%2C-2453.8%20-131.5%2C-113.5%2095%2C-426.5%20-186.2%2C-776%20-161.4%2C-200.5%20-256.7%2C-312.4%20-570.7%2C-394%20-380.7%2C-98.9%20-892.7%2C104.4%20-1023.7%2C607.4%20-31.5%2C120.8%2016%2C276.6%20-40.1%2C130.8%20-74.1%2C88.8%20-95.1%2C327.9%20-118.6%2C428%20-40.3%2C172.3%20-74.9%2C291.6%20-126.8%2C445.8%20-1135.2%2C3371.5%20-5999.1%2C3615.3%20-7403.4%2C81.1%20-1005%2C-2529.4%20699.1%2C-5139.3%202930.2%2C-5585.2%201586.9%2C-317.2%202581.3%2C157.2%203490%2C883.1%201705.7%2C1362.6%203389.2%2C2698.8%205084.7%2C4078.8l1885.4%201512.7c113.1%2C95.5%20199.5%2C170.7%20312.2%2C260.5%201099%2C875.3%201730.4%2C1607.4%203173.3%2C1981.2%201688.2%2C437.3%203294.9%2C3.6%204517.5%2C-905.8l609.3%20-536.1c119.3%2C-118.1%20160.5%2C-190.9%20267.2%2C-305.6%20264.9%2C-284.7%20513.3%2C-672.9%20690.4%2C-1027.8%20837.4%2C-1679%20737.9%2C-3805.9%20-272.3%2C-5480.3l-1580.9%20-2428.2c-82.9%2C-123.7%20-143.5%2C-235.1%20-220.9%2C-351.8%20-305%2C-459.3%20-597.9%2C-917.5%20-909.2%2C-1381.7%20-159.7%2C-238.1%20-288.5%2C-452.6%20-450.4%2C-695l-4741.2%20-7247.8c-330%2C-374.6%20-432.1%2C-510.9%20-875.7%2C-842.4l-711%20-434.5c-272%2C-136.9%20-518.7%2C-232.2%20-827.1%2C-318.3%20-998.4%2C-278.7%20-2060.2%2C-235.3%20-2983.8%2C71.1%20-839.4%2C278.6%20-1484.1%2C764.8%20-2066.7%2C1369.7%20-326.2%2C338.6%20-888.1%2C1282.6%20-1151.3%2C1712.3l-3317.8%205273c-142.9%2C241.7%20-324.3%2C435.1%20-344.3%2C791%20-46.1%2C819%201120.9%2C1523.4%201838.3%2C397.5l1312.8%20-2085.3c151.2%2C-235.8%20299.5%2C-466.4%20451.2%2C-694.2l1334.2%20-2102.2c371%2C-621.2%201148.7%2C-1925.5%201681%2C-2328%2099.4%2C-75.2%20215.7%2C-173.4%20331.9%2C-240.8%20489.2%2C-283.6%201029.3%2C-506.2%201843.4%2C-444%20988.5%2C75.6%201636.1%2C577.8%202124.6%2C1311.7l5185.9%207986.7c81.5%2C133.7%20145%2C211.7%20225.2%2C347.5%20149.5%2C253.3%20300.4%2C450.8%20447.8%2C697.7l1754.8%202672.5c68.9%2C65.2%20-6%2C35.2%2076.2%2C40.4z%22%2F%3E%3Cpath%20class%3D%22fl1%22%20d%3D%22M18044.9%2019544.1l464%20365.1c1049.1%2C640.9%202053.2%2C732.6%203203.2%2C293.6%20286.7%2C-109.5%20550.3%2C-277.6%20796.5%2C-463.1l998.8%20-1178.4c377.2%2C-839.1%20499.6%2C-1560.5%20247.7%2C-2482.8l-466.9%20-1086.6c-3.9%2C-17.6%20-14.2%2C-19.8%20-21.6%2C-29.5%2037.8%2C239.3%20289.8%2C559.4%20441.8%2C1161.6%20277.9%2C1100.8%2051.2%2C2140.9%20-662.1%2C3008.8%20-941.4%2C1145.5%20-2482.5%2C1652.3%20-3969.2%2C1011.5%20-239.7%2C-103.3%20-321.6%2C-130.4%20-523.3%2C-278.5%20-130%2C-95.5%20-381.3%2C-297.1%20-508.9%2C-321.9z%22%2F%3E%3Cpath%20class%3D%22fl1%22%20d%3D%22M9800.6%2018055c56%2C145.8%208.6%2C-9.9%2040.1%2C-130.8%20131%2C-503%20643.1%2C-706.3%201023.7%2C-607.4%20314%2C81.6%20409.3%2C193.5%20570.7%2C394%20281.2%2C349.5%2054.7%2C662.6%20186.2%2C776%200%2C-469.5%2022%2C-733%20-374.5%2C-1050.1%20-69%2C-55.2%20-228.1%2C-141.8%20-327.9%2C-168.5%20-582%2C-155.2%20-1173.2%2C337.8%20-1118.3%2C786.7z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Global CSS — same brand tokens & sections from the source HTML
  css: ['~/assets/css/main.css', '~/assets/css/aidi-group.css'],

  // <head> — title, meta, favicon, fonts (Cormorant Garamond + Instrument Sans)

app: {
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Aidi Wealth — Building real wealth, globally.',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // Standard SEO
      {
        name: 'description',
        content:
          'Invest in Stocks & ETFs, Treasury & Cash, Gold and Crypto — one investment office, institutional infrastructure.'
      },
      {
        name: 'keywords',
        content:
          'Aidi Wealth, The Aidi Group, wealth management, family office, multi-asset investing, treasury management, T-Bills, ETFs, gold custody, crypto custody, emerging markets wealth, Sacramento wealth management'
      },
      // Open Graph (Facebook, LinkedIn, iMessage previews, etc.)
      { property: 'og:locale',          content: 'en_US' },
      { property: 'og:type',            content: 'website' },
      { property: 'og:title',           content: 'Aidi Wealth' },
      {
        property: 'og:description',
        content:
          'Build real wealth, globally, across stocks, treasuries, gold and crypto.'
      },
      { property: 'og:url',             content: 'https://aidiwealth.com/' },
      { property: 'og:site_name',       content: 'Aidi Wealth' },
      { property: 'og:image',           content: 'https://aidiwealth.com/og-image.png' },
      { property: 'og:image:width',     content: '1200' },
      { property: 'og:image:height',    content: '630' },
      { property: 'og:image:type',      content: 'image/png' },
      // Twitter / X cards
      { name: 'twitter:card',           content: 'summary_large_image' },
      { name: 'twitter:title',          content: 'Aidi Wealth' },
      {
        name: 'twitter:description',
        content:
          'Build real wealth, globally, across stocks, treasuries, gold and crypto.'
      },
      { name: 'twitter:image',          content: 'https://aidiwealth.com/og-image.png' }
    ],
    link: [
      { rel: 'icon',             type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/favicon.svg' },
      { rel: 'canonical',        href: 'https://aidiwealth.com/' },
      { rel: 'preconnect',       href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',       href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Instrument+Sans:wght@400;500;600&display=swap'
      }
    ]
  }
}
})
