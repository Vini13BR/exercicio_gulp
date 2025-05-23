const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulpUglify = require("gulp-uglify");
const sourceMap = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin")

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(gulpUglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImage(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.images = comprimeImage;
exports.sass = compilaSass;
exports.js = comprimeJs;