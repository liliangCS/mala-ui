const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const cleanCSS = require("gulp-clean-css")

// scss -> css -> minify css
const handleScss = async () => {
  return gulp.src("components/css/**/*.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest("build/css"))
}

exports.handleScss = handleScss