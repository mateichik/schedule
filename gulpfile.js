var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');
var gp_concat = require('gulp-concat');
var gulp = require('gulp');


gulp.task('controls-less', function() {
    return gulp.src('./styles/less/controls/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(minifyCss({compatibility:'ie9'}))
		.pipe(gp_concat('controls.css'))
        .pipe(gulp.dest('./styles/css/'))
});

gulp.task('common-less', function() {
    return gulp.src('./styles/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(minifyCss({compatibility:'ie9'}))
		.pipe(gp_concat('common.css'))
        .pipe(gulp.dest('./styles/css/'))
});



gulp.task('watch', function(){



	watch('./styles/less/**/*.less', function(events, done){
		console.log('building less...')
		gulp.start('controls-less');
		gulp.start('common-less');
	});
});