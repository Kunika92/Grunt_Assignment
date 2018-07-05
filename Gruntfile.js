
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        // Add Lint
        jshint: {
            all: ['Gruntfile.js', 'js/**/*.js']
        },

        // Concatenate all JS files and CSS files
        concat: {
            js: {
                src: ['js/one.js','js/two.js'],
                dest: 'build/js/script.js',
            },
            css: {
                src: ['css/main.css','css/bootstrap.css','css/normalize.css'],
                dest: 'build/css/styles.css',
            },
        },

        // Watch JS and CSS files
        watch: {
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat'],
            },
        },

        // Convert SASS file to CSS file
        sass: {
            dist: {
                files: {
                    'css/main2.css': 'scss/main.scss'
                }
            }
        },
        
        //Minify CSS file
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
              }]
            }
        },

        //Minify js file
        uglify: {
            bundle: {
                files: {
                    'js/one.min.js': ['js/one.js'],
                    'js/two.min.js': ['js/two.js']
                }                
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['jshint','concat', 'sass', 'cssmin', 'uglify:bundle']);
};