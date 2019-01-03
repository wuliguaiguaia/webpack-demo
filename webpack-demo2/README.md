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
- 模块热替换
- 所有文件进行压缩
- 懒加载


1. install webpack
    ```
    mkdir webpack-demo1
    cd webpack-demo1
    npm init -y
    npm install xxxx
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
    - sass-loader 将sass语法转化为css语法
    - css-loader 将字符串转化为真正的 css
    - style-loader 生成style标签并嵌入页面

```
  rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
      /*
        use:["style-loader","css-loader","sass-loader"]
      */
  }]
```

      
## Function
1. babel
2. sass
3. jpg,mp3



## Appendix:

[guide](https://www.webpackjs.com/guides/)