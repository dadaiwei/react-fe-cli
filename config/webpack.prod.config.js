const merge = require("webpack-merge");
const baseConfig = require("./webpack.com.config");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]", // path-原资源路径，query-原查询字符串
      algorithm: "gzip", // 压缩算法
      threshold: 0, // 文件压缩阈值
      minRatio: 0.8 // 最小压缩比例
    }),
    new BundleAnalyzerPlugin()
  ]
});
