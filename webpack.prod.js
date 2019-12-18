const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  externals: [],
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: ['.', './node_modules', './src'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  }
});