define([
  'backbone'
], function(Backbone) {
  var App = Backbone.Router.extend({
    routes: {
      '': 'ctrl',
      'topic/:id': 'detailCtrl',
      'list': 'ctrl',
      '*path': '404'
    },
    ctrl: function(fragment, options) {
      fragment = fragment || Backbone.history.fragment;
      fragment = fragment ? fragment : 'index';
      var ctrl = 'js/controller/' + fragment;

      require([ctrl], function(View) {
        var view = new View(options);
        $('#main').html(view.el);
      });
    },
    detailCtrl: function(id) {
      this.ctrl('detail', {
        id: id
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