const gulp = require('gulp');
const path = require('path');

gulp.task('build-watch', () => {
  return gulp.watch('./src/**/*.+(html|css)').on('change', (pathname) => {
    const distPath = path.join(
      ...['build', ...path.dirname(pathname).split(path.sep).slice(1)]
    );
    // console.log(distPath);
    return gulp.src(pathname).pipe(gulp.dest(distPath));
  });
});

gulp.task('watch', gulp.series('build-watch'));
