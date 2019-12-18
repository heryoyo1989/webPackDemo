const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  externals: [],
  output: {
    library: 'MyLibrary',
    libraryTarget: 'umd',
    filename: 'MyLibrary.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: ['.', './node_modules', './src'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  }
});