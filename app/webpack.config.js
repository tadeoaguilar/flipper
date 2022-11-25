// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebPackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";


module.exports = {
  entry: './index.jsx',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'],
        include: /flexboxgrid/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}