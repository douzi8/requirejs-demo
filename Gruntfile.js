var isMac = process.platform === 'darwin';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      dev: {
        files: [
          'app/**/*.js'
        ],
        tasks: ['develop:development'],
        options: { nospawn: true }
      },
      pro: {
        files: [
          'app/**/*.js'
        ],
        tasks: ['develop:production'],
        options: { nospawn: true }
      }
    }
  });

  /**
   * @description App start
   * @example
   * grunt app
   * grunt app --debug
   */
  grunt.registerTask('app', function() {
    var dev = grunt.option('debug');
    var tasks = [];
    var env = process.env.NODE_ENV;

    if (dev) {
      tasks.push('develop:development', 'watch:dev');
    } else {
      tasks.push('develop:production', 'watch:pro');
    }
    
    grunt.task.run(tasks);
  });

  grunt.registerTask('develop', (function() {
    var start;
    return function(env) {
      var spawn = require('child_process').spawn;
      env = env || 'production';
      // If process is exist then kill it
      if (start) start.kill('SIGTERM');
     
      if (!isMac) {
        start = spawn('node', ['app/app.js'], {
          env: {
            NODE_ENV: env
          }
        });
      } else {
        start = spawn('node', ['app/app.js']);
      }

      start.stdout.on('data', function (data) {
        console.log('' + data);
      });
      start.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
      });
    };
  })());
}