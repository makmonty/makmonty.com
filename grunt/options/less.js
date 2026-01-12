module.exports = {
  dist: {
    files: {
      '<%= dir.dist %>/stylesheets/style.css': [ '<%= dir.less %>/style.less' ]
    }
  }
};