var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    gulp.src(['client/js/**/*.js', '!client/js/vendor/**'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));

    // Copy vendor files
    gulp.src('client/js/vendor/**')
        .pipe(gulp.dest('build/js/vendor'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
    gulp.run('scripts');

    // Watch files and run tasks if they change
    gulp.watch('client/js/**', function(event) {
        gulp.run('scripts');
    });
});