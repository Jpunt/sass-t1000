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

    markdown: {
      readme: {
        src: 'README.md',
        dest: 'demo/dist/index.html',
        options: {
          template: 'demo/layout.html'
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
      markdown: {
        files: ['README.md', 'demo/layout.html'],
        tasks: ['markdown']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('default', ['jasmine_node', 'concat']);
};
