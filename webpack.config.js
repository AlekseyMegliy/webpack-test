const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
        exclude: /\.module\.scss$/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment
        ? "styles/[name]/[name].css"
        : "styles/[name]/[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
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
