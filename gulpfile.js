const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babel = require('gulp-babel'),
    webpack = require('gulp-webpack'),
    named = require('vinyl-named');


gulp.task('convertJS', function () {
    return gulp.src('./js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./source/scripts/'))
})

gulp.task('webpack', ['convertJS'], function () {
    return gulp.src('')
        .pipe(webpack({
            entry: {
                'toggle-avatar': './source/scripts/toggle-avatar.js',
                'toggle-header': './source/scripts/toggle-header.js',
                'share': './source/scripts/share.js',
            },
            output: {
                filename: '[name].js',
            }
        }))
        .pipe(gulp.dest('./source/scripts/'));
})

gulp.task('build', ['convertJS', 'webpack']);

gulp.task('watch', function () {
    gulp.watch(['./js/**/*.js'], ['build']);

});
gulp.task('default', ['build', 'watch']);