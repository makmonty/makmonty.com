module.exports = function(grunt) {

  grunt.registerTask('build', [
    'less:dist'
  ]);

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);

};