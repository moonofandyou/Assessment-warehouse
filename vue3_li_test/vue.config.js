const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

})

module.exports = {
  devServer:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:7001', // 目标服务器的地址
        changeOrigin: true, // 是否改变请求的原始地址
        ws:true,
        // secure:true,
        pathRewrite: {
          '^/api': '' // 路径重写，把 /api 替换为空
        }
      }
    }
  },
  lintOnSave:false,
}