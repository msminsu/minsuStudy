// gulp 및 패키지 모듈 호출
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    scss        = require('gulp-sass'),
    browserSync  = require('browser-sync').create(); // browser-sync 호출


var src   = 'project/src';
var dist  = 'project/dist';
var paths = {
    // js : src + '/js/**/*.js',
    js : src + '/js/script-study.js',
    scss : src + '/sass/**/*.scss'
};

/**
 * =====================================+
 * @task : HTML livereload 반영
 * =====================================+
 */
gulp.task('html', function () {
    return gulp
        .src('./**/*.html')

        /**
         * html 파일을 browserSync로 브라우저에 반영
         */
        .pipe(browserSync.reload({
            stream : true
        }));
});

/**
 * =====================================+
 * @task : Script 병합,압축,min 파일 생성
 * =====================================+
 */
gulp.task('js:combine', function () {
    return gulp
        .src(paths.js)
        .pipe(concat('combined.js'))
        .pipe(gulp.dest(dist+'/js'))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest(dist+'/js'))

        /**
         * 스크립트 browserSync로 브라우저에 반영
         */
        .pipe(browserSync.reload({stream: true}));
});

/**
 * ==============================+
 * @SCSS : SCSS Config(환경설정)
 * ==============================+
 */
var scssOptions = {
    outputStyle : "expanded",
    indentType : "tab",
    indentWidth : 1,
    precision: 3,
    sourceComments: false
};

/**
 * ==================================+
 * @task : SCSS Compile & sourcemaps
 * ==================================+
 */

gulp.task('scss:compile', function () {
    return gulp
        .src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on('error', scss.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist + '/css'))

        /**
         * SCSS 컴파일을 수행한 후 browserSync로 브라우저에 반영
         */
        .pipe(browserSync.reload({stream: true}));
});

/**
 * ==============================+
 * @task : browserSync실행
 * ==============================+
 */
gulp.task('browserSync', ['html', 'js:combine', 'scss:compile'], function () {
    return browserSync.init({
        port:3333,
        server:{
            baseDir: './project'
        }
    });
});

/**
 * ==================================+
 * @task : watch 파일 변경을 감지
 * ==================================+
 */
gulp.task('watch', function () {

    gulp.watch('./**/*.html', ['html']); // html task 를 watch 에 등록
    gulp.watch(paths.js, ['js:combine']);
    gulp.watch(paths.scss, ['scss:compile']);

});

gulp.task('default', ['browserSync','watch']);