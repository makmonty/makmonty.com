module.exports = function(grunt) {

  grunt.registerTask('build', [
    'clean',
    'copy',
    'pug',
    'less:dist'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('default', ['dev']);
};
