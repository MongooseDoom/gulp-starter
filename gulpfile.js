var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var paths = {
    // C5
    theme: './application/themes/shs/',
    scss: './application/themes/shs/css/scss',
    css: './application/theme/shs/css'
    // CDE
    // theme: './templates/main/',
    // scss: './templates/main/css/scss/',
    // css: './templates/main/css/'
};


// Starts browserSync and watches css files
gulp.task('default', function() {
    browserSync.init({
        proxy: "LOCALHOST_URL"
    });

    // When there is a change to a scss file, run 'sass'
    gulp.watch(paths.theme + "**/*.scss", ['sass']);
    // Reload when there is a change to a theme JS, XSL, or PHP file
    gulp.watch(paths.theme + "**/*.js", browserSync.reload);
    gulp.watch(paths.theme + "**/*.php", browserSync.reload);
    gulp.watch(paths.theme + "**/*.xsl", browserSync.reload);
});

gulp.task('sass', function() {
    // Compile sass, save to ./css, reload page with browserSync
    return gulp.src(paths.scss + "layout.scss")
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream());
});