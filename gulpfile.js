const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./styles/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
    }))
        .pipe(gulp.dest('./assets/'));
});

gulp.task('default', function() {
    gulp.watch(['./styles/*.scss'], gulp.series('sass'));
});