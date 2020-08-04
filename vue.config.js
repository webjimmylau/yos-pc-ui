module.exports = {
  devServer: {
    port: 4060
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`
      }
    }
  }
};
