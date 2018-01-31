'use strict';
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

//Browser support
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
];

gulp.task('styles',function(){
	return gulp.src('./css/style.css')
	.pipe(autoprefixer({browser:AUTOPREFIXER_BROWSERS}))
	//minify the file
	.pipe(csso())
	.pipe(gulp.dest('./css'))
});

gulp.task('script', function() {
	return gulp.src('./js/**/*.js')
	//minify the file
	.pipe(uglify())
	.pipe(gulp.dest('./js'))
});






