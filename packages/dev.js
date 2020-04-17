#!/usr/bin/env node

const webpack = require('webpack');
const {errorLog, underlineLog} = require('../utils/index');
const webpackConfig = require('../config/webpack.dev.config');

// 开发模式下打包
function development() {
  const compilder = webpack(webpackConfig);
  compilder.run((err, stats) => {
    if (err) {
      errorLog(err);
      process.exit(1);
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }));

    if (stats.hasErrors()) {
      errorLog('  Build failed with errors.\n');
      process.exit(1);
    }
    console.log(`\nApp is running: ${underlineLog('http://localhost:3000/')}`);
  });
};

module.exports = development;