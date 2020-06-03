const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }, // 出口文件

  //loader
  module: {
    rules: [{
        test:  /\.(sass|scss|css)$/, //修改成scss 可以讀的檔案
        use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: './dist'
                }
            },
            {
                loader: 'css-loader', //(順序1)
                options: {
                    modules: true
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    }]
},
  plugins: [
    //這個套件是載入 css 檔案
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css"
    })
]
};