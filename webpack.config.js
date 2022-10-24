var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(".", "build"),
    publicPath: "",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: { filename: "assets/[name][ext]" },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
