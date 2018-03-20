'use strict'
var autoprefixer = require('gulp-autoprefixer')
var csso = require('gulp-csso')
var del = require('del')
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minifyCss = require('gulp-minify-css')
// Browser support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]
gulp.task('default', function () {
  console.log('Gulp is running correctly')
})

gulp.task('minify-css', function () {
  gulp.src('./css/style.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('css/minifiedcss'))
})

gulp.task('script', function () {
  return gulp.src('./js/**/*.js')
  // minify the file
    .pipe(uglify())
    .pipe(gulp.dest('./js/minifiedjs'))
})
