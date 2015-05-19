require.config({
  // 调试模式
  urlArgs: Date.now(),
  baseUrl: '/demo/asset/',
  shim: {
    // 新版本支持amd加载
    jquery: {
      exports: '$'
    },
    // underscore: {
    //   exports: '_'
    // },
    backbone: {
      deps: ['_', 'jquery']
      //exports: 'Backbone'
    }
  },
  paths: {
    // vendor
    'jquery': 'vendor/zepto',
    'text': 'vendor/text',
    '_': 'vendor/underscore',
    'backbone': 'vendor/backbone',
    
    // lib
    'PageView': 'lib/pageView',
    'prefix': 'lib/prefix',
    'headerHtml': 'template/shared/header.html',

    // project modules
    'app': 'js/app',
    'config': 'js/config',

    // html template
    'indexHtml': 'template/index.html',
    'detailHtml': 'template/detail.html',
    'bookHtml': 'template/book.html'
  }
});

// Start app
require(['app'], function(app) {
  window.app = app;
  app.start();
});