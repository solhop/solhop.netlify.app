import theme from '@nuxt/content-theme-docs'

export default theme({
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-167980163-1'
    }]
  ]
})
