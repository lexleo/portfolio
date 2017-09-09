const gulp = require('gulp'),
    pug = require('gulp-pug');
    del = require('del');
    rename = require('gulp-rename');
    browserSync = require('browser-sync').create(),

    svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');



// styles
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// paths
const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets/'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/',
        css: './src/styles/app.scss'
    },
    images: {
        src: ['src/images/**/*.*', '!src/images/**/*.svg'],
        dest: 'build/assets/images/',
        icons: {
            src: 'src/images/icons/',
            dest: 'build/assets/images/icons/'
        }
    },
    scripts: {
        src: 'src/scripts/**/*.*',
        dest: 'build/assets/scripts/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/assets/fonts/'
    }
}


// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}


// scss
function styles() {
    return gulp.src(paths.styles.css)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}


// clean build
function clean() {
    return del(paths.root);
}


// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}


// watch html and css changes
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
}


// reload browser on changes in build folder
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}


// move images to build
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

// move fonts to build
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}



exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.fonts = fonts;



// Tasks
gulp.task('default', gulp.series(
    gulp.parallel(styles, templates, images, fonts, scripts),
    gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, fonts, scripts)
));


gulp.task('sprite', function () {
	return gulp.src(paths.images.icons.src + '*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
				}
			}
		}))
		.pipe(gulp.dest(paths.images.icons.dest));
});

