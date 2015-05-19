define([
  'backbone',
  'config'
], function(
  Backbone,
  config
) {
  function getQuery(query) {
    var ret = {};
    var searchReg = /([^&=?]+)=([^&]+)/g;
    var match;

    while (match = searchReg.exec(query)) {
      name = match[1];
      value = match[2];
      ret[name] = value;
    }

    return ret;
  }

  var App = Backbone.Router.extend({
    initialize: function() {
      this.main = $('#main');
      this.firstLoad = true;
      this.ctrlCollection = Object.keys(this.routes);
      this.ctrlCollection[0] = 'index';
    },
    routes: {
      '': 'ctrlAction',
      'detail': 'ctrlAction',
      'book': 'ctrlAction',
      'car/list': 'ctrlAction',
      'car/detail': 'ctrlAction',
      '*path': 'notFound'
    },
    ctrlAction: function() {
      var fragment = Backbone.history.fragment;
      var queryIndex = fragment.indexOf('?');
      var query, ctrl;

      if (queryIndex === -1) {
        ctrl = fragment;
        query = '';
      } else {
        ctrl = fragment.slice(0, queryIndex);
        query = fragment.slice(queryIndex + 1);
      }

      ctrl = ctrl || 'index';
      var ctrlSrc = config.assetRoot + 'js/controller/' + ctrl + '.js';
      query = getQuery(query);

      require([ctrlSrc], _.bind(function(View) {
        var view = new View({
          query: query,
          ctrlName: ctrl
        });

        this.main.append(view.el);

        if (this.firstLoad) {
          this.prevPage = view;
          this.firstLoad = false;
          return;
        }

        this.currentPage = view;

        if (this.isForward()) {
          this.animatePages('to-left');
        } else {
          this.animatePages('to-right');
        }

      }, this));
    },
    notFound: function() {
      console.log('404');
    },
    isForward: function() {
      var pre = this.ctrlCollection.indexOf(this.prevPage.ctrlName);
      var current = this.ctrlCollection.indexOf(this.currentPage.ctrlName);

      return pre < current;
    },
    animatePages: function(direction) {
      var removeClasses = 'page-on-center page-on-right page-on-left';

      // Loading new page
      if (direction === 'to-left') {
        this.prevPage.$el.removeClass(removeClasses).addClass('page-from-center-to-left');
        this.currentPage.$el.removeClass(removeClasses).addClass('page-from-right-to-center');
        this.prevPage = this.currentPage;
      }

      // Go back
      if (direction === 'to-right') {
        this.currentPage.$el.removeClass(removeClasses).addClass('page-from-left-to-center');
        this.prevPage.$el.removeClass(removeClasses).addClass('page-from-center-to-right');
        this.prevPage = this.currentPage;
      }
    },
    start: function() {
      // Start Backbone app
      Backbone.history.start({
        // 设置根路径
        root: config.baseUrl,
        // 启用pushState
        pushState: false
      });
    }
  });

  return new App();
});