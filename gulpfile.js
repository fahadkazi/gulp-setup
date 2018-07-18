const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const order = require('gulp-order');

gulp.task('styles', function() {
    gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss())
        .pipe(gulp.dest('./css/'))
});

gulp.task('css', function () {
    return gulp.src('externals/css/**/*.css')
      .pipe(concatCss('bundle.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('dist/'));
  });

//Watch task
gulp.task('default',function() {
    gulp.watch('styles/**/*.scss',['styles', 'css']);
});

gulp.task('scripts', function() {
    return gulp.src('vendors/*.js')
        .pipe(order([
            "vendors/jquery.min.js",
            "vendors/popper.min.js",
            "vendors/bootstrap.min.js",
            "vendors/*.js"
        ], {base: './'}))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('apps', function() {
    return gulp.src('js/*.js')
        .pipe(order([
            "js/index.js",
            "vendors/*.js"
        ], {base: './'}))
        .pipe(concat('app.bundle.js'))
        .pipe(gulp.dest('dist/'));
});