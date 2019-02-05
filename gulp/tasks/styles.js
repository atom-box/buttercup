let gulp = require('gulp');

let autoprefixer = require('autoprefixer'),
//cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import');




gulp.task('styles', function() {
  console.log('Before piping css...');
  return gulp.src('/Users/evan/Dropbox/code/portfolio-2019/src/styles/**/*.css').pipe(postcss([cssImport, nested, autoprefixer])).pipe(gulp.dest('./build/styles/'));
  console.log('...after piping css.');
});
