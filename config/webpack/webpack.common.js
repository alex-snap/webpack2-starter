const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const helpers = require('../helpers');

module.exports = function () {
  return {
    entry: {
      main: './src/scripts/pages/main'
    },
    resolve: {
      modules: [
        helpers.root('src'),
        'node_modules'
      ],
      extensions: ['.js', '.json', '.scss', '.sass']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }],
          exclude: /node_modules/
        },
        {
          test: /\.(scss|sass$)/,
          use: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'postcss-loader', 'sass-loader']
          })
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [ { loader: 'url-loader', options: { limit: 10000 } } ]
        },
        { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, use: [ { loader: 'file-loader' } ] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        chunksSortMode: 'dependency'
      }),
      new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: 'commons.bundle.js' }),
      new ExtractTextPlugin("[name].css")
    ]
  };
};