module.exports = {
  pages: {
    index: {
      entry: "test/main.js"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/components"
      }
    },
    plugins: [
      // require('unplugin-vue-define-options/webpack')()
    ]
  }
}