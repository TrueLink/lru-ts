var gulp = require('gulp');
var ts = require('gulp-type');
var mv = require('gulp-rename');

gulp.task('default', function () {
    var tsResult = gulp.src('index.ts')
                       .pipe(ts({
        declarationFiles: true,
        noExternalResolve: false, //?
        module: 'commonjs',
        target: 'ES5',
        noImplicitAny: true, 
        noLib: true, 
        outDir: '.',
        sortOutput: false
    }));
    
    tsResult.dts.pipe(mv('exports.d.ts')).pipe(gulp.dest('.'));
    return tsResult.js.pipe(gulp.dest('.'));
});

