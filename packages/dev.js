#!/usr/bin/env node

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {errorLog, underlineLog} = require('../utils/index');
const webpackConfig = require('../config/webpack.dev.config');

// 开发模式下打包
function development() {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    contentBase: webpackConfig.devServer.contentBase
  });
  server.listen(webpackConfig.devServer.port, (err) => {
    if (err) {
      errorLog(err);
      process.exit(1);
    }
    console.log(`\nApp is running: ${underlineLog('http://localhost:3000/')}`);
  });
};

module.exports = development;