module.exports = {
  assets: {
    files: [
      {
        src: ['assets/**/*'],
        dest: '<%= dir.dist %>',
        expand: true
      },
      {
        cwd: 'assets/favicons',
        src: ['**/*'],
        dest: '<%= dir.dist %>',
        expand: true
      }
    ]
  }
};
