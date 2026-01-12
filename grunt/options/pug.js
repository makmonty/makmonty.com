module.exports = {
  dist: {
    files: {
      '<%= dir.dist %>/index.html': '<%= dir.views %>/index.pug',
      '<%= dir.dist %>/games.html': '<%= dir.views %>/games.pug',
      //'<%= dir.dist %>/error.html': '<%= dir.views %>/error.pug',
      '<%= dir.dist %>/games/box-rain.html': '<%= dir.views %>/games/box-rain.pug'
    }
  }
};
