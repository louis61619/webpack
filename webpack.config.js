const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode:'development',
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }, // 出口文件


  
    //...
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8000
    },
  

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

    //清理舊的檔案
    new CleanWebpackPlugin(),
    //這個套件是載入 css 檔案
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css"
    }),

    new HtmlWebpackPlugin({
      //來源檔
      template: './src/index.html',
      //產生的檔案
      filename: 'index.html', 
      minify: false,
      inject: 'head',
      title : '首頁'

  })
]
};