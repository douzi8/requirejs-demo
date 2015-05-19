define([
  'text!detailHtml',
  'PageView'
], function(
  template,
  PageView
) {
  var View = PageView.extend({
    events: {
      'click .js-book': 'bookAction'
    },
    initialize: function() {
      PageView.prototype.initialize.apply(this, arguments);
      this.header({
        center: {
          title: '详情页',
          callback: function() {
            
          }
        }
      });
      this.render();
    },
    render: function() {
      var html = this.template(template, {
        query: this.query
      });

      this.$el.html(html);
      var self = this;
      // setTimeout(function() {
      //   self.bookAction();
      // }, 2000);
    },
    bookAction: function() {
      this.goTo('book?id=3&title=上海');
    }
  });

  return View;
});