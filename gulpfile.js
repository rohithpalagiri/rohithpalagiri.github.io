const gulp = require("gulp");
const browserSync = require("browser-sync");
const browserify = require("browserify")
const minify = require("gulp-minify");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const flatten = require('gulp-flatten');
var sass = require("gulp-sass");
const { src, series, parallel, dest, watch } = require("gulp");

const styleSRC = "src/**/*.scss";
const bs = browserSync.create();

const dirs = {
	src: './src',
	build: './build'
};

const paths = {
	cname: {
		src: 'CNAME',
		build: dirs.build
	},
	robots: {
		src: 'robots.txt',
		build: dirs.build
	},
	templates: {
		src: `${dirs.src}/templates/**/*.swig`,
		views: `${dirs.src}/templates/views/**/*.swig`,
		build: dirs.build
	},
	scss: {
		src: {
			abby: `${dirs.src}/assets/css/abby/**/*.scss`,
			site: `${dirs.src}/assets/css/site/**/*.scss`,
			resume: `${dirs.src}/assets/css/resume/*.scss`
		},
		build: `${dirs.build}/assets/css`
	},
	js: {
		index: `${dirs.src}/Scripts/index.js`,
		src: `${dirs.src}/Scripts/*.js`,
		build: `${dirs.build}/js`
	},
	assets: {
		src: `${dirs.src}/assets/**`,
		build: `${dirs.build}/assets`
	},
	images: {
		src: `${dirs.src}/assets/img/**/*`,
		build: `${dirs.build}/assets/img`
	},
	deploy: `${dirs.build}/**/*`
};

function html() {
    return (
        gulp
          .src("src/**/*.html", { base: "." })
          .pipe(flatten())
          //write to build folder
          .pipe(dest("./build/"))
          .pipe(browserSync.stream())
      );
}

function css() {
  return (
    gulp
      .src("src/**/*.scss", { base: "." })
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: "compressed",
          includePaths: ["node_modules"],
        }).on("error", sass.logError)
      )
      .pipe(concat("style.min.css"))
      .pipe(sourcemaps.write("."))
      //write to build folder
      .pipe(dest("./build/assets/css"))
      .pipe(browserSync.stream())
  );
}

function js() {
	return browserify({
		entries: [paths.js.index],
		debug: true
	})
	.bundle()
	.on('error', handleError)
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({ loadMaps: true }))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.js.build))
	.pipe(bs.stream());
}

const devWatch = () => {
  browserSync.init({
    server: {
      baseDir: "./build",
      directory: true,
    },
  });

  watch("src/**/*.html", gulp.series(html));
  watch("src/**/*.scss", gulp.series(css));
  watch("src/**/*.js", gulp.series(js));
  watch("src/**/*.js", gulp.series(js));
  watch([paths.assets.src], gulp.series(assets));
};

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

function assets() {
	return gulp.src([paths.assets.src, `!src/assets/{css,css/**}`])
		.pipe(gulp.dest(paths.assets.build));
}

const build = series(html, css, js, assets, devWatch);

exports.default = build;