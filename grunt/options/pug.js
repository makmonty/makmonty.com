module.exports = {
  dist: {
    files: {
      expand: true,
      src: [ 'views/games.jade', 'views/index.jade' ],
      dest: [ './' ]
    }
  }
};