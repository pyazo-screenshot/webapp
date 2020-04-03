module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/_variables.scss";`,
      },
    },
  },
}
