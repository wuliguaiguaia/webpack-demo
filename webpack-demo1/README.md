# webpack测试

版本
```
"webpack": "^4.27.0",
"webpack-cli": "^3.1.2",
```

功能：
- es201x 转 es2015，生成sourcemap
- sass转css，生成单独css文件，生成sourcemap
- 处理 mp3,jpg,png.... 

存在的问题：
- 无热更替，全页面刷新
- 生成目录只有一级（无法css输出路径为css/[name].css 因为打包出来的图片为 xxx.jpg格式，publicPath不起作用 不会用）
- 无压缩功能

1. install webpack
    ```
    mkdir webpack-demo1
    cd webpack-demo1
    npm init -y
    npm install webpack webpack-cli
    npm run build
    npm start
    ```    
2. file dirctories
    ```
    |- /assets
        
    |- /src
        |- /js
            |- /module
                |- module1.js
            |- index.js
        |- /sass
            |- reset.scss
            |- main.scss
        |- /statics
            |- bg.jpg
            |- music.mp3
        |- index.html
    ```
3. package.json
    ```
    {
        "scripts": {
            "build": "webpack -w",
            "start": "webpack-dev-server --open"
        }
    }
    ```

4. webpack 配置
- css
    1. sass-loader 将sass语法转化为css语法
    2. css-loader 将字符串转化为真正的 css
    3. style-loader 生成style标签并嵌入页面

```js
  rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
            sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
            sourceMap: true
            }
        }]
    })
  }]
```



## Appendix:

[guide](https://www.webpackjs.com/guides/)