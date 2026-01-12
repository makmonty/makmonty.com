module.exports = {
  assets: {
    files: [
      {
        src: ['assets/**'],
        dest: '<%= dir.dist %>',
        expand: true
      }
    ]
  }
};
