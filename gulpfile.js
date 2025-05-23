const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulpUglify = require("gulp-uglify");
const sourceMap = require("gulp-sourcemap");
const imagemin = require("gulp-imagemin")

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
    outputStyle: 'compressed'
    }))
    .pipe(sourceMap.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(gulpUglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.sass = compilaSass;
exports.js = comprimeJs;