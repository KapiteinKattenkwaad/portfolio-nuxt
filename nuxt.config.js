import pkg from './package'

module.exports = {
  modules: ['bootstrap-vue/nuxt']
}



export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Just+Another+Hand|Schoolbell|Wendy+One|ZCOOL+KuaiLe' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous:100,300,400,600,700,900' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}


