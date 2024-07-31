import gulp from "gulp";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";
import sassCompiler from "sass";

const sassWithCompiler = sass(sassCompiler);

const paths = {
  styles: {
    src: "src/scss/main.scss",
    dest: "dist",
  },
  images: {
    src: "imagens/**/*",
    dest: "dist/imagens",
  },
  html: {
    src: "*.html",
    dest: "dist",
  }
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassWithCompiler().on("error", sassWithCompiler.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest));
}

function images() {
  return gulp
    .src(paths.images.src, { encoding: false })
    .pipe(
      imagemin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo(),
      ])
    )
    .on("error", (err) => {
      console.error("Image minification error:", err);
    })
    .pipe(gulp.dest(paths.images.dest));
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.html.src, html);
}

const build = gulp.series(styles, images, html);

export { styles, images, html, watch, build };
