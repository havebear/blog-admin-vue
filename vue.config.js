const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variable.less')
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'primary-color': '#26B28F'
        // },
        javascriptEnabled: true
      }
    }
  }
}
