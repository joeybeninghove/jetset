const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = env => {
  process.env.NODE_ENV = (env && env.NODE_ENV) || "development";

  return {
    entry: path.resolve(__dirname, "_src/index.js"),
    devtool: "source-map",
    output: {
      filename: "scripts.js",
      path: path.resolve(__dirname, "assets"),
      publicPath: "/assets/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["transform-class-properties"]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "_src/styles")],
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader" },
            { loader: "postcss-loader" }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        template: "_src/templates/base.html",
        filename: "../_layouts/base.html",
        hash: true
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: "async"
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve("_src/images")
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.resolve("_src/images/favicons/favicon.ico"),
          to: path.resolve("./")
        }
      ]),
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:4000",
        files: ["_site", "_src"]
      })
    ]
  };
};
