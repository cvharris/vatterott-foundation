export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Vatterott Foundation',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:title',
        content: 'The Vatterott Foundation'
      },
      {
        prefix: 'og:http://ogp.me/ns#',
        property: 'og:description',
        content:
          'Family philanthropy for the amelioration of human poverty, the advance of education, the promotion of the public welfare, and the advance of religion.'
      },
      {
        prefix: 'og:http://ogp.me/ns#',
        property: 'og:image',
        content: 'http://www.vatterottfoundation.org/images/profile.jpg'
      },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        prefix: 'og:http://ogp.me/ns#',
        property: 'og:url',
        content: 'http://www.vatterottfoundation.org'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'IVDez7EEwbCw6YsqMYH6Y1vBgwmLw_KNdcgyjx-7RA0'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Prompt:300,300i,400,400i,700',
        rel: 'stylesheet',
        media: 'none',
        onload: "this.media='all';"
      }
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
    'normalize.css/normalize.css',
    'font-awesome/css/font-awesome.min.css',
    '~/assets/styles/main.less'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
