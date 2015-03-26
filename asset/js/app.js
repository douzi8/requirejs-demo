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
      console.log(Backbone);
    },
    404: function() {
      console.log('404');
    },
    start: function() {
      Backbone.history.start({pushState: true});
    }
  });

  return new App;
});