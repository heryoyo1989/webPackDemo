const express = require('express');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const server = new DevServer(compiler, {
  compress: true,
});

server.listen(1989, function () {
  console.log('Example app listening on port 3000!\n');
});