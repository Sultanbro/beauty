"use strict";

const gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    livereload = require('gulp-livereload'),
    concat = require("gulp-concat"),
    rename = require('gulp-rename'),
    del = require('del'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    order = require("gulp-order"),
    babel = require('gulp-babel');

var path = {
    assets: {
        html: 'dist/html',
        php: 'dist/php',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
        template: 'dist/views/'
    },
    src: {
        html: 'assets/*.html',
        php: 'assets/*.php',
        js: 'assets/js/*.js',
        style: 'assets/scss/**/*.scss',
        img: 'assets/img/**/*.*',
        fonts: 'assets/fonts/**/*.*',
        template: 'views/*.php'
    },
    watch: {
        html: 'assets/*.html',
        php: 'assets/*.php',
        js: 'assets/js/**/*.js',
        style: 'assets/scss/**/*.scss',
        img: 'assets/img/**/*.*',
        fonts: 'assets/fonts/**/*.*',
        template: 'views/*.php'
    },
    clean: 'dist/**'
};

function style() {
    return gulp.src(path.src.style)
    // .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer('last 2 versions'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        // .pipe(sourcemaps.write())
        // .pipe(concat('style.css'))
        .pipe(gulp.dest(path.assets.css))
        .pipe(reload({stream:true}));
}

function jsConcat() {
    return gulp.src(['assets/js/*/*.js', 'assets/js/main.js'])
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        .pipe(order([
            "libs/swiper-bundle.js",
            "modules/_variables.js",
            "modules/_carouselTemplates.js",
            "modules/_menu.js",
        ]))

        .pipe(rigger())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.assets.js))
        .pipe(reload({stream:true}));
}

function template() {
    return gulp.src(path.src.template)
        .pipe(rigger())
        .pipe(gulp.dest(path.assets.template))
        .pipe(reload({stream:true}));
}

function font() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.assets.fonts))
        .pipe(reload({stream:true}));
}

function image() {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.assets.img))
        .pipe(reload({stream:true}));
}

// function phpServer() {
//     return php.server({
//         base: './',
//         port: 8080,
//         keepalive: true,
//         livereload: true
//     });
// }
//
// function browsersync(done) {
//     browserSync.init({
//         proxy: '127.0.0.1:8080',
//         port: 8010,
//         open: true,
//         tunnel: false,
//         livereload: true,
//         logPrefix: "Frontender"
//     });
//     done();
// }

function browserSyncReload(done) {
    browserSync.reload();
    done();
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    watch(path.watch.style, style);
    // watch(path.watch.js, js);
    watch(path.watch.js, jsConcat);
    watch(path.watch.img, image);
    watch(path.watch.fonts, font);
}

const build = gulp.series(clean, gulp.parallel(style, jsConcat, image, font));
const watchRun = gulp.parallel(build, watchFiles);

// export tasks
exports.style = style;
// exports.js = js;
exports.jsConcat = jsConcat;
exports.image = image;
// exports.template = template;
exports.clean = clean;
exports.build = build;
exports.watch = watchRun;
exports.default = watchRun;