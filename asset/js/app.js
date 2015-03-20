define(function() {
  var app = {};
  var pathname = location.pathname;

  function getCtrl() {
    var path = location.hash.replace(/^#/, '');

    path = path ? path : 'index';

    return 'js/controller/' + path;
  }

  app.start = function() {
    require([getCtrl()], function(View) {
      new View();
    });
  };

  window.onhashchange = function() {
    app.start();
  };

  return app;
});