const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/public/" : "./", // 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath
  outputDir: "dist", // 运行时生成的生产环境构建文件的目录(默认""dist""，构建之前会被清除)
  assetsDir: "public", //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认"")
  indexPath: "index.html", //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.ts", // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      title: "Index Page", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ["chunk-vendors", "chunk-common", "index"] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: true, // 是否在保存的时候eslint检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  filenameHashing: false, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  //反向代理
  devServer: {
    // 环境配置
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      // 配置多个代理(配置一个 proxy: "http://localhost:4000" )
      "/api": {
        target: "http://192.168.1.248:9888",
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
};