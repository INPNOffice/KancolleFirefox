const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  target: "web",
  loader: {
    rules: [
      {
        test: /\.(js|tag)$/,
        use: "babel-loader",
        enforce: "post",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist")
  }
};
