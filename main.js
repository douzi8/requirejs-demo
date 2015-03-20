require.config({
  baseUrl: 'asset',
  paths: {
    'app': 'js/app'
  }
});

// Start app
require(['app'], function(app) {
  app.start();
});