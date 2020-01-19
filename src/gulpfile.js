/*
steps:
    1. Install nodejs. https://nodejs.org/en/
    2. run "npm install gulp --global"
    2. run "npm install" OR if package.json is not present 
        "npm install --save-dev gulp gulp-concat gulp-uglify gulp-autoprefixer gulp-sass gulp-sourcemaps dart-sass"
    3. configure this file as needed then run "gulp"
*/


var gulp = require('gulp'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   autoprefixer = require('gulp-autoprefixer'),
   sass = require('gulp-sass'),
   sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('dart-sass');

gulp.task('sass', function() {
   return gulp.src('./src/scss/*.scss')
       .pipe(sourcemaps.init())
           .pipe(sass({includePaths: ['scss/']}).on('error', sass.logError))
           .pipe(sass().on('error', sass.logError))
           .pipe(sass())
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest('./dist/css/'))
});

 
gulp.task('watch', gulp.series('sass', function() {
   gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series('watch'));

gulp.task('build', gulp.series('sass'));
