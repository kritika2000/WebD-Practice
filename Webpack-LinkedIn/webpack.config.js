/**
 * This will set up all of the configuration options
 * for webpack so that we don't have to manually type
 * the commands.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // entry: {
  //   about: "./src/about.js",
  //   contact: "./src/contact.js",
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // filename: "[name].bundle.js",
  },
  // optimization: {
  //   minimizer: [new UglifyJsWebpackPlugin()],
  // },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpj|png)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
};
