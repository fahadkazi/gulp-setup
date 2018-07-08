const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');

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