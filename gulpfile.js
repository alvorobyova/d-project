'use strict';

const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
  return gulp.src('./styles/styles.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(concatCss("bundle.css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/styles'));
});

// отслеживание изменений
gulp.task('watch', function () {
  gulp.watch('./styles/*.scss', gulp.series('sass'));
});