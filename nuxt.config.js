export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mini-crm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'csrf-token', content: `` },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css' },
    ]
  },
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles/main.scss',
  ],
  styleResources: {
    scss: ["./assets/css/styles/*.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    path: '~/components', // will get any components nested in let's say /components/test too
    pathPrefix: false,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    "@nuxtjs/style-resources"
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    Credential: true,
    baseURL: "http://crm.samaneahan.ir",
    withCredentials: true,
    headers: {
      // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      'X-Requested-With': 'XMLHttpRequest',
      // 'X-CSRF-TOKEN' : head.meta.find(item => item.name === "csrf-token").content
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    BASE_URL: "http://crm.samaneahan.ir",
  }
}
