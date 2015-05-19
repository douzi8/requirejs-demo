define([
  'text!indexHtml',
  'PageView'
], function(
  template,
  PageView
) {
  var View = PageView.extend({
    events: {
      'click .js-detail': 'detailAction'
    },
    initialize: function() {
      PageView.prototype.initialize.apply(this, arguments);
      this.header({
        center: {
          title: '首页',
          callback: function() {
            
          }
        }
      });
      this.render();
    },
    detailAction: function() {
      this.goTo('detail?id=3');
    },
    render: function() {
      var html = this.template(template, {
        query: this.query
      });

      this.$el.html(html);
    }
  });

  return View;
});