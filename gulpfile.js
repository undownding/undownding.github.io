var gulp = require('gulp');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var ejs = require('gulp-ejs');
var conact = require('gulp-concat');
var fs = require('fs');
var clean = require('gulp-clean');

var personal = JSON.parse(fs.readFileSync('src/personal.json', 'utf8'));

gulp.task('default', function() {
    gulp.run('dependencies');
    gulp.run('index');
    gulp.run('css');
    gulp.run('js');
    gulp.run('fonts');
    gulp.run('images');
});

gulp.task('index', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/index.ejs')
        .pipe(ejs(personal))
        .pipe(rename({ extname : ".html" }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'))
});

gulp.task('css', function () {
    gulp.src('src/assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(conact('all.min.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/assets/css/'));
    
    gulp.src('src/assets/css/colors/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/assets/css/colors/'));
});

gulp.task('js', function () {
    gulp.src('src/assets/js/*')
        .pipe(gulp.dest('dist/assets/js/'))
});

gulp.task('fonts', function () {
    gulp.src('src/assets/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts/'))
});

gulp.task('images', function () {
    gulp.src('src/assets/images/*')
        .pipe(gulp.dest('dist/assets/images/'))
});
gulp.task('dependencies', function () {
    gulp.run('jquery');
    gulp.run('materialize');
    gulp.run('font-awesome');
    gulp.run('validator');
    gulp.run('wow');
    gulp.run('material-icons');
});

gulp.task('jquery', function () {
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('materialize', function () { 
    gulp.src('bower_components/Materialize/fonts/**/*')
        .pipe(gulp.dest('dist/assets/fonts/'));
    gulp.src('bower_components/Materialize/dist/css/materialize.min.css')
        .pipe(gulp.dest('dist/assets/css/'));
    gulp.src('bower_components/Materialize/dist/js/materialize.min.js')
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('font-awesome', function () {
    gulp.src('bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/assets/icons/fonts/'));
    gulp.src('bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('dist/assets/icons/css/'));
});

gulp.task('validator', function () {
    gulp.src('bower_components/bootstrap-validator/dist/validator.min.js')
        // .pipe(uglify())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('wow', function () {
    gulp.src('bower_components/wow/dist/wow.min.js')
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('material-icons', function () {
    gulp.src('bower_components/material-design-icons/iconfont/*')
        .pipe(gulp.dest('dist/assets/fonts/material-design-icons/'));
});

gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});
