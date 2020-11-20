export default {
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY,
    cldCloud: process.env.CLD_CLOUD,
    uploadPreset: process.env.UPLOAD_PRESET,
  },
  target: 'static',
  router: {
    base: '/'
  },
  components: true,
  generate: {
    crawler: false,
    routes: [
      '/projects/project-one',
      '/projects/project-two',
      '/projects/project-three',
      '/projects/project-four',
      '/projects/project-five',
      '/projects/project-six',
      '/projects/project-seven',
      '/projects/project-eight',
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Cat Portfolio',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Cat Portfolio by Sasha Wolffe'
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css'
      }
    ],
    script: [
      // {
      //   src:
      //     'https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js',
      //   defer: true
      // },
      // {
      //   src:
      //     'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js',
      //   defer: true
      // },
      // { src: 'https://widget.cloudinary.com/v2.0/global/all.js', defer: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxtjs/cloudinary',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Libre Franklin': true,
      'Libre Baskerville': true
    },
    display: 'swap'
  },
  cloudinary: {
    cloudName: process.env.CLD_CLOUD,
    useComponent: true
  },
  fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      brands: ['faLinkedin','faGithub','faTwitter','faInstagram','faMedium','faNpm']
    }
  },
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
