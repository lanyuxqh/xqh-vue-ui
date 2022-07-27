const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // 默认`vue-cli` 对svg做的处理，正则匹配后缀名为.svg的文件，匹配成功之后使用 url-loader 进行处理。
    // 为避免冲突我们修改如下规则配置：
    // 修改svg规则排除icons目录中svg文件
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})
