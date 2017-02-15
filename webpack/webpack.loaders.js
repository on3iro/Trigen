'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [
      {
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc.js',
          failOnWarning: false,
          failOnError: true,
        }
      }
    ]
  },
  {
    // Transpile ES6
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    // Style loader
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
    ]
  },
  {
    test: /\.json?$/,
    loader: 'json',
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limi=10000&mimetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  }
];
