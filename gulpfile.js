'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('default', function () { 
    console.log('Running Gulp...');
    return;
});

gulp.task('sass', function () {
    console.log('SASS: Produce CSS and source maps');
    return gulp.src('assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
});
 
gulp.task('sass:watch', function () {
    console.log('SASS Watch: Watching changes in SCSS files');
    gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('develop', ['default', 'sass', 'sass:watch'], function() {
    // Do stuff
});