/**
 * Created by msminsu on 16. 8. 6..
 */
var gulp = require('gulp');
var concat =  require('gulp-concat');

gulp.task('concat:js',function(){
    return gulp.src(['project/src/js/script01.js','project/src/js/script02.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('project/dist/js'));
});

gulp.task('default',['concat:js'])