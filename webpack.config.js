const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    htmlWrap: path.resolve(__dirname, "src", "scripts", "htmlWrap.js"),
    iframe: path.resolve(__dirname, "src", "scripts", "iframe.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].bundle.js"
  },
  target: "web",
  loader: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
        enforce: "post",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src", "manifest.json"),
        transform: function(content, path) {
          // generates the manifest file using the package.json informations
          return Buffer.from(
            JSON.stringify({
              description: process.env.npm_package_description,
              version: process.env.npm_package_version,
              ...JSON.parse(content.toString())
            })
          );
        }
      }
    ])
  ]
};
