'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    // Entrypoint
    path.join(__dirname, '../src/index.js')
  ],
  output: {
    // Put outputted files into dist folder
    path: path.join(__dirname, "..", '/dist/'),

    // Calc output file name dynamically,
    filename: '[name].[hash].min.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    // Generate html5 file, which includes all webpack bundles in the body
    // using script tags
    // Takes a template file as input and outputs it to the dist folder
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: '200.html',
      favicon: 'src/img/favicon.png',
    }),

    // Not 100% what this does, but its use is highly recommended by the
    // official webpack docs, so I obey ;)
    new webpack.optimize.OccurrenceOrderPlugin(),

    // Extracts the css from the js files and puts them on a separate .css file.
    // This is done for performance reasons and is used in prod environments only.
    // Styles load faster on their own .css files as they don't have to wait for the JS
    // to load.
    new ExtractTextPlugin('[name]-[hash].min.css'),

    // JS uglifying
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),

    // Helps passing variables between webpack and js-files
    // Gives us the ability to e.g. switch between dev and production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    rules: require('./webpack.loaders.js')
  },
};
