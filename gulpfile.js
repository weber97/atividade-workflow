var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");     //minificar html
var sass = require("gulp-sass");        //compilar sass
var rename = require("gulp-rename")     //renomear com .min

// TAREFA PARA COMPILAR OS ARQUIVOS EM SASS E ENVIAR PARA A PASTA CSS
gulp.task('sass', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});

// TAREFA PARA MINIFICAR O ARQUIVO HTML E ENVIAR PARA A PASTA DIST
gulp.task('minify-html', function() {
    return gulp.src('./source/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

//TAREFA PARA MONITORAR TODOS OS ARQUIVOS DO DIRETÓRIO SOURCE
gulp.task('watch-files',function(){
    gulp.watch('./source/scss/*.scss', ['sass']);
    gulp.watch('./source/index.html', ['minify-html']);
});