<template>
    <section class="page_component">
      <h2>webpack的使用</h2>

      <h3>cnpm淘宝镜像安装</h3>
      <p>npm安装过慢时，使用cnpm进行安装</p>
      <pre>
      <code class="hljs">npm install -g cnpm --registry=https://registry.npm.taobao.org</code>
    </pre>

      <h3>安装</h3>
      <p>使用npm安装webpack</p>
      <pre>
      <code class="hljs">npm install webpack -D</code>
    </pre>

      <h3>css文件的处理</h3>
      <p>使用npm安装css-loader</p>
      <pre>
      <code class="hljs">npm install css-loader -D</code>
      <code class="hljs">npm install style-loader -D</code>
    </pre>

      <h3>less文件的处理</h3>
      <p>使用npm安装less-loader</p>
      <pre>
      <code class="hljs">npm install less-loader -D</code>
    </pre>

      <h3>图片文件的处理</h3>
      <p>使用npm安装url-loader</p>
      <pre>
      <code class="hljs">npm install url-loader -D</code>
      <code class="hljs">npm install file-loader -D</code>
    </pre>

      <h3>ES6语法处理</h3>
      <p>使用npm安装babel-loader</p>
      <pre>
      <code class="hljs">npm install -D babel-loader babel-core babel-preset-es2015</code>
    </pre>

      <h3>使用Vue</h3>
      <p>使用npm安装vue</p>
      <pre>
      <code class="hljs">npm install vue -D</code>
    </pre>

      <h3>处理.vue文件</h3>
      <p>使用npm安装vue-loader 和 vue-template-compiler</p>
      <pre>
      <code class="hljs">npm install vue-loader vue-template-compiler -D</code>
    </pre>

      <h3>安装HtmlWebpackPlugin插件</h3>
      <p>使用npm安装HtmlWebpackPlugin插件</p>
      <pre>
      <code class="hljs">npm install html-webpack-plugin -D</code>
    </pre>

      <h3>搭建本地服务器</h3>
      <p>使用npm安装webpack-dev-server</p>
      <pre>
      <code class="hljs">npm install webpack-dev-server@2.9.1 -D</code>
    </pre>

      <h3>webpack.config.js配置</h3>
      <p>webpack.config.js基本配置</p>
      <pre>
      <code class="hljs">
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.export{
  entry: './src/main.js'  //文件入口
  output: {
    path: path.resolve(__dirname,'dist'),  //__dirname是一个全局变量，保存当前页面所在路径，使用path.resolve()进行路径拼接
    filename: 'bundle.js'， //导出文件名
  },
  module:{
    rules:[
      {
        //配置css-loader
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        //配置less-loader
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        //配置url-loader
        test: /\.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader: 'url-loader',
            options:{
              //当加载的图片小于limit时，会将图片编译成base64字符串形式
              //当加载的图片大于limit时，需要使用file-loader模块进行加载
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }，
          }
        ]
      },
      {
        //配置babel-loader
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        //配置vue-loader
        //报错提示需要安装一个插件，可以把vue-loader版本修改为^13.0.0版本
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue/esm/js'
    },
    //配置省略扩展名
    extensions: ['.js', '.css', '.vue']
  }，
  plugins: {
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  },
  devServer: {
    //为哪一个文件夹提供本地服务，默认时根文件夹，这里要填写'./dist'
    contentBase: './dist',
    //页面实时刷新
    inline: true
  }
}</code>
    </pre>

      <h3>package.json中的配置</h3>
      <p>修改package.json中的scripts</p>
      <pre>
      <code class="hljs">
        "scripts": {
          "build": "webpack",
          "dev": "webpack-dev-server"
        }
      </code>
    </pre>
    </section>
</template>

<script>
  export default {
    name: "WebPack"
  }
</script>

<style scoped>
  @import "../../public/CSS/style.css";
</style>