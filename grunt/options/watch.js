module.exports = {
  options: {
    livereload: true
  },
  less: {
    files: '<%= dir.less %>/**',
    tasks: [ 'less:dist' ]
  },
  views: {
    files: '<%= dir.views %>/**',
    tasks: [ 'pug' ]
  },
  assets: {
    files: 'assets/**',
    tasks: [ 'copy:assets' ]
  }
};
