# webpack 文档学习小结
 webapck 主要功能：
 - 模块打包
 - 支持压缩合并等前端优化

webpack 核心:
 - entry
 - output
 - loader
 - plugins

## entry
entry ===>  rules  ===> webpack ===> output
## output
```
output: {
    filename: '_[name].js',
    path: path.resolve(_dirname,"xxx"),
}
```
1. [] 是一个占位符
2. filename 用于输出文件的文件名。
3. path 目标输出目录的绝对路径。
4. publicPath 做异步加载的时候的前缀
5. chunkFilename：异步加载文件名
6. hash 与 chunkhash的区别：
    - hash 文件名的hash一样
    - hashchunk 对每个文件分别指定hash
7. hashDigestLength 指定 hash 位数
8. 异步加载
require.ensure 做代码分割
```js
require.ensure([],(require)=>{require("./index.js")},"dynamic");　// 依赖 函数 名字
```

## modules
1. rules 对匹配的文件进行预处理
2. exclude: ["node_modules"]
## 解析 [resolve]：配置模块如何解析
1. alias: 创建import和require的别名
```js
resolve:{
    alias:{
        car: path.resolve(_dirname,'src/component/car.js'); // require("car")
        '@component': path.resolve(_dirname, "src/component"); // import car from @component/car.js
        @: path.resolve(_dirname,"src")
    }
}

// use

```

## devtool
此选项控制是否生成，以及如何生成 source map。
```js
devtool:"source-map"  //cheap-source-map
```

#plugins
对 webpack 编译的流程 进行一个 lifecycle hock
before-compilation  run down 
```js
new webpack.ProvidePlugin({ //　保留变量名，无需ｒｅｑｕｉｒｅ
    $: 'jquery'
}),

new webpack.optimize.CommonsChunkPlugin({ // 把公共的模块抽取出来
    name: 'common',
    minChunks: Infinity
})

```