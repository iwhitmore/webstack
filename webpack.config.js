'use strict'
const {resolve} = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Path is in relation to output path
const extractCSS = new ExtractTextPlugin('../css/styles.css')

const serverPath = 'http://127.0.0.1:3000'


let common = {
  entry: ['./src/js/lib/main.js'],
  output: {
    filename: 'app.js',
    path: resolve('./static/js'),
    publicPath: '/js/',
    pathinfo: true,
  },
  resolve: {
    modules: [
      'node_modules',
      resolve('./src/js'),
      resolve('./src/less'),
    ],
    alias: {
      js: resolve('./src/js/'),
      scss: resolve('./src/scss/'),
    },
    extensions: ['.js', '.scss'],
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {cacheDirectory: '.babel-cache'},
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
}


exports.development = Object.assign({}, common, {
  cache: true,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './src/js/lib/main.js',
  ],
  devtool: 'eval',
  //stats: {colors: true},
  //performance: {hints: "warning"},

  plugins: common.plugins.concat([
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]),

  module: {
    rules: common.module.rules.concat([{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    }]),
  },

  devServer: {
    contentBase: resolve('./static'),
    publicPath: '/js/',
    host: '127.0.0.1',
    port: '4000',
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
    clientLogLevel: 'warning',
    proxy: {
      '/api': serverPath,
      '/db': serverPath,
      '/v1': 'http://127.0.0.1:8888',
      '/parse': 'http://127.0.0.1:1337',
      '/pouch': 'http://127.0.0.1:5984',
      '/jsongraph': serverPath,
      '/css': serverPath,
      '/fonts': serverPath,
      '/img': serverPath,
      '/js': serverPath,
    },
  },
})


exports.production = Object.assign({}, common, {
  devtool: 'cheap-module-source-map',

  module: {
    rules: common.module.rules.concat([{
      test: /\.scss$/,
      use: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      }),
    }]),
  },



  plugins: common.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    extractCSS,
  ]),
})

