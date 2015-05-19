define([
  'text!bookHtml',
  'PageView'
], function(
  template,
  PageView
) {
  var View = PageView.extend({
    initialize: function() {
      PageView.prototype.initialize.apply(this, arguments);
      this.render();
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