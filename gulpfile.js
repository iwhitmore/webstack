'use strict'

// Disable node deprecation warnings
// babel-loader 6.2.10 generates a warning with webpack 2
//
// Github issue:
// https://github.com/facebookincubator/create-react-app/issues/1620
process.noDeprecation = true


// Core utilities
let gulp = require('gulp')
let taskListing = require('gulp-task-listing')
let eslint = require('gulp-eslint')
let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')

// Helpers
let gutil = require('gulp-util')



// Variables

function isProd(override) {
  let prod = override
    || gutil.env.production
    || process.env.NODE_ENV === 'production'
    || false
  return prod
}


function getWebpackConfig(override) {
  let prod = (override || isProd())
  let webpackImport = require('./webpack.config.js')
  let config = prod ? webpackImport.production : webpackImport.development
  let envName = (override || isProd())  ? 'production' : 'development'
  config.plugins.push(
    new webpack.DefinePlugin({
      '__PROD__': prod,
      'process.env.NODE_ENV':JSON.stringify(envName),
    })
  )
  return config
}


function handleError(err) {
  if (err) {
    gutil.log(err.toString())
    this.emit('end')
  }
}


// List gulp tasks
gulp.task('help', taskListing)


// Build webpack bundle for production
gulp.task('build', function(callback) {
  let config = getWebpackConfig(true)
  config.stats = "none"

  webpack(config, function(err, stats) {
    handleError(err)
    gutil.log('[webpack]', stats.toString({colors: true}))
    callback()
  })
})


// Run webpack dev server (does not build app.js on disk)
gulp.task('dev', function(callback) {
  let config = getWebpackConfig()
  let server = new WebpackDevServer(webpack(config), config.devServer)
  server.listen(4000, 'localhost', handleError)
})



gulp.task('lint', function() {
  return gulp.src([
    './src/js/**/*.js',
    '!./src/js/lib/ext/**/*.js',
  ])
  .pipe(eslint({
    'env': {
      'browser': true,
      'node': true,
      'phantomjs': true,
      'mocha': true,
      'jquery': true,
      'amd': true,
      'es6': true,
    },
    'extends': 'eslint:recommended',
    'globals': {
    },
  }))
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
  .on ('error', handleError)
})


gulp.task('default', ['build'])


