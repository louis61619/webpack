const path = require('path');

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
        test: /\.css$/,
        use: [{
                loader: 'style-loader' //(順序2)
            },
            {
                loader: 'css-loader', //(順序1)
                options: {
                    modules: true
                }
            }]
    }]
}
};