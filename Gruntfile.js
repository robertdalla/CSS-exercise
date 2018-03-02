module.exports = function(grunt) {
    // Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    paths: ['less/'],
                    strictImports: false,
                    compress: false,
                    //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) - <%= pkg.author %> */\n'
                },
                files: {
                    'styles.css': 'src/less/styles.less'
                }
            }
        },

        autoprefixer: {
            production: {
                expand: true,
                flatten: true,
                src: [
                    'styles.css'
                ],
                dest: './'
            }
        }

    });

    // Dependencies.
    // npm install grunt --save-dev
    // npm install grunt-bower-task --save-dev
    grunt.loadNpmTasks('grunt-contrib-less');       // npm install grunt-contrib-less --save-dev
    grunt.loadNpmTasks('grunt-autoprefixer');       // npm install grunt-autoprefixer --save-dev

    // Tasks.
    grunt.registerTask('default', []); // do nothing, run specific task instead
    grunt.registerTask('prd', ['less']);
};
