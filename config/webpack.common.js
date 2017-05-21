const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/app/polyfills',
    vendor: './src/app/vendor',
    app: './src/app/main'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.html', '.css', '.scss', '.xlf'],
    modules: [helpers.root('src'), 'node_modules']
  },

  module: {
    rules: [
      { test: /\.html$/, use: 'raw-loader' },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          helpers.root('public/css'),
          helpers.root('node_modules')
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: true
            }
          }]
        })
      },
      { test: /\.xlf$/, use: 'raw-loader' },
      { test: /\.(scss|sass)$/, use: ['raw-loader', 'postcss-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'),
      {}
    ),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app'])
    })
  ]
};