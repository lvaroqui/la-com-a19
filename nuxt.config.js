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
        content:
          "La Compagnie des Lampes, la nouvelle comédie musicale de l'UTC"
      },
      { property: 'og:image', content: '/comedmus/2019/miniature.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '500' },
      { property: 'og:image:height', content: '408' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/comedmus/2019/favicon.ico' }
    ]
  },
  router: {
    base: '/comedmus/2019/'
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
