module.exports = {
  dist: {
    files: {
      '<%= dir.dist %>/index.html': '<%= dir.views %>/index.jade',
      '<%= dir.dist %>/games.html': '<%= dir.views %>/games.jade',
      //'<%= dir.dist %>/error.html': '<%= dir.views %>/error.jade',
      '<%= dir.dist %>/games/box-rain.html': '<%= dir.views %>/games/box-rain.jade'
    }
  }
};
