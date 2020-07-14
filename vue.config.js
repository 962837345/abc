const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/components/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // 要公用的scss的路径
            resources: './src/assets/css/base.scss'
          })
          .end()
    })
  },

}