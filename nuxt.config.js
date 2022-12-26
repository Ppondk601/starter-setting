export default {
  ...{
    ssr: false,
  target: 'static',
  head: {
    title: 'oil-store-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
  },

  css: [
    "normalize.css/normalize.css",
    "animate.css/animate.css",
    "~/assets/style/index.scss"
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    ["@nuxtjs/google-fonts", "@nuxtjs/style-resources"],
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
  },
  build: {
  },
  googleFonts: {
    families: {
      //ชื่อฟ้อน
    }
  },
  styleResources: {
    scss: ["~/assets/style/global.scss"],
  }
}
