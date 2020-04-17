#!/usr/bin/env node

#!/usr/bin / env node;

const webpack = require('webpack');
const {errorLog, successLog} = require('../utils/index');
const webpackConfig = require('../config/webpack.prod.config');

// 开发模式下打包
function production() {
  webpack(webpackConfig, (err, stats) => {
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
    successLog('打包完成');
  });
};

module.exports = production;