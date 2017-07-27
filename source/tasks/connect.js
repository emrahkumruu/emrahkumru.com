/**
 * @author Bilal Cinarli
 */

var connect = function(gulp, options, plugins) {
    gulp.task('connect', function() {
        plugins.connect.server({
            root:       'app',
            livereload: true,
            port:       3030
        });
    });
};

module.exports = connect;