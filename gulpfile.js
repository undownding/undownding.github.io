var gulp = require('gulp');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
    
});

gulp.task('depends', function () {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/assets/js/'))
});