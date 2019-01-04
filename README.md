# webpack-demo
## webpack 和 gulp grunt 的区别？
- gulp
	1. 类似产品流水线，对配置文件gulpfile.js中的task配置路径下所有文件进行相关的操作
	2. 里面主要是通过 pipe 导管一层一层的往下执行，像水一样往下流
- webpack
	1. 视一切为模块，是一个模块打包器
	2. 在配置文件 webpack.config.js的entry入口文件的依赖文件层层递进做静态分析，转化为静态资源，最终根据output输出几个打包后的文件
	3. gulp最大的区别是 支持code-split，支持模块化 commonjs，amd，原生支持es6的import语法

## 什么是bundle？什么是chunk？什么是module?
	1. bundle是由webpack打包出来的文件，一般是在output的filename中定义：[name].bundle.js
	2. chunk是指webpack在进行模块的依赖分析的时候，代码分割出来的代码块。
	3. module是开发中的单个模块。



## 什么是loader？什么是plugin？区别在哪里？
	1. 根据 module.rule 的规则，webapck查找与test正则匹配的文件，使用响应的loader进行文件的预处理，比如sass，less，stylus转为css，babel将es2015以上的转为es2015
	2. plugin用来定义webpack的打包方式，参与webpack打包的各个流程，即生命周期
	3. loader更强，即浏览器不能识别的代码进行转译，plugin较弱一些，一般是将最终结果进行优化，比如压缩合并



## 如何自动生成webpack配置？
	1. webpack-cli
	2. vue-cli
	3. 等其他脚手架工具



## webpack-dev-server 和 http服务器有什么区别？
	1. webpack-dev-server 使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效



## 什么是模块热更新？
	1. 使得代码修改过后不用刷新浏览器就可以更新，是高级版的自动刷新浏览器。



## 什么是长缓存，如何在webpack做长缓存优化？
	1. 浏览器会对静态资源进行存储，每次代码更新，浏览器会重新下载，长缓存可以使浏览器只下载更新的文件
	2. 分离经常更新的代码，output指定chunkhash，通过 NameModulesPlugin或是HashedModuleIdsPlugin使再次打包文件名不变。



## 如何配置多入口文件
```js
entry:{
   index:'./index.js',
 index1:'./index1.js'
},
```
## 利用webpack如何优化前端性能
## 提取公共模块
```js
new webpack.optimize.CommonsChunkPlugin({ // 把公共的模块抽取出来
    name: 'common',
    minChunks: Infinity
})
```

致命问题：
xxx项目应该如何配置？？？？？


请问：你们招的是webpack工程师吗？
### Appendix
[webpack 指南](https://www.webpackjs.com/guides/)
