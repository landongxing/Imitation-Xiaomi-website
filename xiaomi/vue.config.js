const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {// 代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5201',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
