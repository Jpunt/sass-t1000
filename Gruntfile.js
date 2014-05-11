module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['src/base.scss', 'src/mixins.scss'],
        dest: 'dist/T-1000.scss'
      }
    },

    jasmine_node: {
      all: ['spec/']
    },

    sass: {
      demo: {
        src: 'demo/stylesheets/demo.scss',
        dest: 'demo/dist/demo.css',
        options: {
          style: 'compressed'
        }
      }
    },

    copy: {
      demo: {
        src: 'demo/index.html',
        dest: 'demo/dist/index.html'
      }
    },

    markdown: {
      demo: {
        src: 'README.md',
        dest: 'demo/markdown/readme.html',
        options: {
          template: 'demo/markdown/layout.html'
        }
      }
    },

    watch: {
      concat: {
        files: '<%= concat.dist.src %>',
        tasks: ['jasmine_node', 'concat:dist']
      },
      test: {
        files: 'spec/**/*',
        tasks: ['jasmine_node']
      },
      sass: {
        files: ['demo/**/*.scss', 'src/**/*.scss'],
        tasks: ['sass:demo']
      },
      copy: {
        files: ['demo/**/*.html'],
        tasks: ['copy:demo']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('default', ['concat', 'sass', 'copy', 'jasmine_node', 'watch']);
  grunt.registerTask('test', ['jasmine_node']);
};
