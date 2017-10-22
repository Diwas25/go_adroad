var gulp = require('gulp'),
watch = require('gulp-watch');

    gulp.task('default',function(){
    console.log("Hey i created a gulp file today");
});

gulp.task('html',function(){
    console.log("Imagine some useful changes done in HTML");
});
gulp.task('styles',function(){
    console.log("Imagine SAAS or PostCSS task running");
});

gulp.task('watch',function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    });
});
gulp.task('watch',function(){
    watch('./app/assets/styles/*.css',function(){
        gulp.start('styles');
    });
});