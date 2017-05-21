const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

commonConfig.module.rules.push({
  test: /\.ts$/,
  use: [
    'awesome-typescript-loader',
    'angular2-router-loader',
    'angular2-template-loader'
  ]
});

module.exports = webpackMerge(commonConfig, {
  devtool: 'eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new BrowserSyncPlugin({
        open: false,
        notify: false,
        port: 9000,
        proxy: 'http://localhost:8080/'
      },
      {
        reload: false
      })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});