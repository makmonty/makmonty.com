var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'node_modules', 'bootstrap', 'less') ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', [ 'less' ], function() {
  return gulp.watch('./less/**/*.less', [ 'less' ]);
});
