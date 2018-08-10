var merge = require('gulp-merge-json');
var gulp = require('gulp');

gulp.task('watch-only', function () {
    gulp.watch('db/**/*.json', ['unify-mock'])
});

gulp.task('unify-mock', function () {
    return gulp.src('db/**/*.json')
        .pipe(merge({
            fileName: 'db.json'
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('default', ['unify-mock']);
gulp.task('watch', ['unify-mock', 'watch-only']);