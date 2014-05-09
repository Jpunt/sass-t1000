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

    watch: {
      concat: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['jasmine_node', 'concat']);
};
