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
      successLog('Build completed.');
    });
  });
};

module.exports = production;