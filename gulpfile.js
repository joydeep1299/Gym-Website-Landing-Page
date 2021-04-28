const gulp = require('gulp'); // Gulp
const htmlmin = require('gulp-htmlmin'); // minify html
const autoprefixer = require('gulp-autoprefixer'); // adds prefix to css
const cleanCss = require('gulp-clean-css'); //minifiy css
const imagemin = require('gulp-imagemin'); //minify images



// Minify Html & Add to Dist
gulp.task('minifyHtml', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
});

// Minify Html & Add to Root
gulp.task('minifyHtmlToRoot', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
});


// Css Prefixer
gulp.task( 'autoPrefixer' , () => {
    return gulp.src('src/stylesheet/*.css')
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest('src/stylesheet/'))}
);
// Minify CSS
gulp.task("minifyCss", () => {
    return gulp.src('src/stylesheet/*.css')
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/stylesheet/'))
});

// Minify Image
gulp.task('imageMin', async () => {
    return gulp.src('src/assets/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/image/'))
}
);
gulp.task('imageMinIcon', async () => {
    return gulp.src('src/assets/image/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/image/icons'))
}
);

// Copy Unchanged Things
gulp.task('copy',()=>{
    return gulp.src('src/assets/font/fonts/*')
    .pipe(gulp.dest('dist/assets/font/fonts'))
});
gulp.task('copyVideo',()=>{
    return gulp.src('src/assets/video/*')
    .pipe(gulp.dest('dist/assets/video/'))
});

// default task
gulp.task('default', gulp.series(['minifyHtml','minifyHtmlToRoot','autoPrefixer', 'minifyCss', 'imageMin','imageMinIcon','copy','copyVideo']));



