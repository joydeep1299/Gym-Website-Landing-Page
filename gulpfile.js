const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');


// Minify Html
gulp.task('minifyHtml', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
});


// Minify CSS
gulp.task("minifyCss", () => {
    return gulp.src('src/stylesheet/*.css')
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/stylesheet/'))
});


// Minify Image
gulp.task('imageMin', async () => {
    return gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
}
);


gulp.task('default', gulp.series(['minifyHtml', 'minifyCss','imageMin']));



