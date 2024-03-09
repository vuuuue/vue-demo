const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // entry: './src/index.js',
  // entry:{
  //   index: './src/index.js',
  //   another: './src/another-module.js',
  // },
  entry:{
    index: {
      import: './src/index.js',
      dependOn: ['sharedcs']
    },
    another: {
      import: './src/another-module.js',
      dependOn: ['sharedcs']
    },
    sharedcs: ['lodash'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: '代码分离'
    })
  ],
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  },
};