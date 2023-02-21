const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  watchOptions: {
    aggregateTimeout: 100,
  },
  entry: {
    app: "./src/index.js",
    page2: "./src/page2.js",
  },
  optimization: {
    mangleWasmImports: true,
    moduleIds: "deterministic",
    removeAvailableModules: true,
    providedExports: false,
    sideEffects: true,
    splitChunks: {
      minChunks: 1,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](moment)[\\/]|node_modules[\\/](lodash)[\\/]/,
          name: "shared",
          chunks: "all",
        },
      },
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "page2.html",
      chunks: ["page2"],
    }),
  ],
};
