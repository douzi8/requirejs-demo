require.config({
  baseUrl: 'asset',
  // Remember: only use shim config for non-AMD scripts
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
    // Open source framework
    // 'jquery': 'http://zeptojs.com/zepto',
    'jquery': 'vendor/jquery-2.1.3',
    'text': 'vendor/text',
    '_': 'vendor/underscore',
    'backbone': 'vendor/backbone',

    // Team modules
    'app': 'js/app',
    'hotTopic': 'js/view/hotTopic',

    // Template
    'indexHtml': 'template/index.html',
    'listHtml': 'template/list.html',
    'topicHtml': 'template/hot-topic.html'
  }
});

// Start app
require(['app'], function(app) {
  app.start();
});