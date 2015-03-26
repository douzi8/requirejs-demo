require.config({
  baseUrl: 'asset',
  // Remember: only use shim config for non-AMD scripts
  shim: {
    jQuery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['_', '$'],
      exports: 'Backbone'
    }
  },
  paths: {
    // Open source framework
    '$': 'vendor/jquery-2.1.3',
    'text': 'vendor/text',
    '_': 'vendor/underscore',
    'backbone': 'vendor/backbone',

    // Team modules
    'app': 'js/app'
  }
});

// Start app
require(['app'], function(app) {
  app.start();
});