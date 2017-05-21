const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackMerge = require('webpack-merge');
const aotLoader = require('@ultimate/aot-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

commonConfig.module.rules.push({
  test: /\.ts$/,
  loaders: ['@ultimate/aot-loader']
});

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  plugins: [
    new aotLoader.AotPlugin({
      entryModule: './src/app/app.module#AppModule',
      tsConfig: './tsconfig.json'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new WebpackChunkHash({algorithm: 'md5'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});