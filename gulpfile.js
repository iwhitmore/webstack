require('babel/register')({stage:0})
require('usr/lib/test')


var jsdom = require('jsdom').jsdom
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var taskListing = require('gulp-task-listing')
var less = require('gulp-less')
var livereload = require('gulp-livereload')
var browserify = require('browserify')
var browserifyInc = require('browserify-incremental')
var babelify = require('babelify')
var mocha = require('gulp-mocha')
var isparta = require('isparta');
var istanbul = require('gulp-istanbul');
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')



function handleError(err) {
  gutil.log(err.toString())
  this.emit('end')
}


gulp.task('help', taskListing)


gulp.task('test', function() {
  return gulp.src('./test/**/*.js')
  .pipe(mocha())
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



gulp.task('cover', function(done) {
  gulp.src('./src/js/**/*.js')
  .pipe(istanbul({instrumenter: isparta.Instrumenter})) 
  .pipe(istanbul.hookRequire())
  .on('finish', function() {
    gulp.src(['./test/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports({
      dir: './dist/coverage'
    }))
    .on('end', done);
  })
})


gulp.task('tdd', function (done) {
    gulp.watch([
    './src/js/**/*.js',
    './test/**/*.js'
  ], {interval: 500}, ['test'])
})


gulp.task('less', function() {
  gulp.src('./src/less/main.less')
  .pipe(less({paths:[
    './src/less',
    './src/less/semantic'
  ]}))
  .on('error', function(e) {console.log(e.message)})
  .pipe(gulp.dest('./dist/css'))
  .pipe(livereload())
})


gulp.task('bundle', function() {
  const cacheFile = './.browserify-cache.json'
  const sourceFile = './src/js/lib/main.js'
  return browserifyInc(browserify(sourceFile, {
    cache: {},
    packageCache: {},
    debug: true,
    fullPaths: true,
  }), {cacheFile: cacheFile})
  .transform(babelify)
  .bundle()
  .on ('error', handleError)
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(livereload())
})


gulp.task('watch', ['bundle'], function() {
  livereload.listen({reloadPage:'./dist/index.html'})
  gulp.watch('./src/less/**/*.less', {interval: 500}, ['less'])
  gulp.watch('./src/js/**/*.js', {interval: 500}, ['bundle'])
  gulp.watch('./dist/index.html', {interval: 500})
  .on('change', function(file) {
    livereload.changed(file.path)
  })
})


gulp.task('default', ['test', 'bundle'])


