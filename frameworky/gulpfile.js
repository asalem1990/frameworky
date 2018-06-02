var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  jsImport = require('gulp-js-import'),
  rename = require("gulp-rename"),
  clean = require("gulp-clean");

gulp.task("default", function() {
  gulp.start('clean');
  gulp.start('sass');
  gulp.start("js");
  gulp.start("watch");
});

gulp.task("watch", function() {
  gulp.watch("src/*/*.js", ['js'])
    .on('error', gutil.log);
  gulp.watch("src/*/*.scss", ['sass'])
    .on('error', gutil.log);
});

gulp.task('clean', function() {
  gulp.src('assets/css/*', {
      read: true
    })
    .pipe(clean())
    .on('error', gutil.log);

  gulp.src('assets/js/*', {
      read: true
    })
    .pipe(clean())
    .on('error', gutil.log);
});

gulp.task('sass', function() {
  gulp.src('src/styles/all.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('assets/css'))
    .on('error', gutil.log);
});

gulp.task('js', function() {
  gulp.src('src/scripts/all.js')
    .pipe(jsImport({
      hideConsole: true
    }))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('assets/js'))
    .on('error', gutil.log);
});