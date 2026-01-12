function loadConfig (path) {
    'use strict';

    var glob = require('glob'), object = {}, key;

    glob.sync('*', { cwd: path }).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });

    return object;
}

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  var config = {
    pkg: pkg,

    dir: {
      dist: 'public',
      less: 'less',
      views: 'views'
    }
  };

  grunt.util._.extend(config, loadConfig('./grunt/options/'));
  grunt.loadTasks('grunt/tasks');

  grunt.initConfig(config);
};
