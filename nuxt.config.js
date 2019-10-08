const prod = process.env.NODE_ENV === 'production'
const isDevelop = process.env.IS_DEVELOP

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: "La Com' - La Compagnie des Lampes",
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    base: !isDevelop && prod ? '/comedmus/2019/' : '/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/scss/_global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-timers'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-svg-loader', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['assets/scss/_variables.scss', 'assets/scss/_responsive.scss']
  },
  /*
   * SVG Loader configuration
   */
  svgLoader: {
    svgoConfig: {
      plugins: [
        { cleanupIDs: false }, // Disables IDs cleanup
        { prefixIds: false } // Disables prefixing IDs
      ]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Exécuter ESLint lors de la sauvegarde
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //       options: {
    //         // fix: true
    //       }
    //     })
    //   }
    // }
  }
}
