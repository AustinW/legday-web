module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/main.js',
        dest: 'dist/main.min.js'
      }
    },
    less: {
      development: {
        options: {
          paths: ['dist/css']
        },
        files: {
          'dist/style.css': 'src/less/main.less'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/less/main.less', 'src/index.html', 'src/main.js', 'gruntfile.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: false, src: ['src/index.html'], dest: 'dist/index.html'},
          {expand: false, src: ['src/fontawesome-all.min.js'], dest: 'dist/fontawesome-all.min.js'}
        ],
      },
    },
    php: {
      dev: {
        options: {
          port: 8080
          
        }
      },
      watch: {}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-php');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'copy']);
  grunt.registerTask('start', ['default', 'php:dev', 'watch'])

};
