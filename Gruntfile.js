module.exports = function(grunt){

    grunt.initConfig({
        watch:{
            dev_reload:{
                files:["*.html"],
                options: {
                  livereload:{
                        host: 'localhost'
                    }
                }
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('run', ["watch:dev_reload"]);

}
