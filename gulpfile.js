var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('default', ['sass']);

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    gulp.src(['./scss/style.scss', './scss/editor-style.scss'])
        .pipe(sass({errLogToConsole: true}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest('./dist'));
});
