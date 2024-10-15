import gulp from "gulp";
import csso from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

const {
    src, dest, series
} = gulp;

const htmlTask = () => src("./src/index.html").pipe(dest('./dist'));

//const stylesTask = () => src("./src/css/*.css").pipe(dest('./dist/css'));
const stylesTask = () => src("./src/css/*.css").pipe(autoprefixer()).pipe(csso()).pipe(dest('./dist/css'));


export const html = htmlTask;
export const styles = stylesTask;
export const dev = series(htmlTask, stylesTask);
