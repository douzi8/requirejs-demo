define([
  'backbone'
], function(Backbone) {
  var App = Backbone.Router.extend({
    routes: {
      '': 'ctrl',
      'list': 'ctrl',
      '*path': '404'
    },
    ctrl: function() {
      var fragment = Backbone.history.fragment;
      fragment = fragment ? fragment : 'index';
      var ctrl = 'js/controller/' + fragment;

      require([ctrl], function(View) {
        var view = new View();
        view.render();
        $('#main').html(view.el);
      });
    },
    404: function() {
      console.log('404');
    },
    start: function() {
      // Start Backbone app
      Backbone.history.start({pushState: true});
    }
  });

  return new App;
});