var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Starts browserSync and watches css files
gulp.task('default', function() {
    browserSync.init({
        proxy: "LOCALHOST_URL"
    });
	
	// When there is a change to a scss file, run 'sass'
	gulp.watch("./css/scss/*.scss", ['sass']);
});

gulp.task('sass', function() {
	// Compile sass, save to ./css, reload page with browserSync
    return gulp.src("./css/scss/layout.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});