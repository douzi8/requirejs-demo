define([
  'prefix',
  'text!headerHtml'
], function(
  prefix,
  headerHtml
) {
  // 页面基类view
  var PageView = Backbone.View.extend({
    tagName: 'article',
    attributes: {
      class: 'page'
    },
    // 头部设置
    header: function(options) {
      var html = this.template(headerHtml, options);

      this.$header.html(html);
    },
    // 模板与数据渲染
    template: function(template, data) {
      data = data || {};
      if (_.isString(template)) {
        return _.template(template)(data)
      } else {
        return template(data);
      }
    },
    // 跳转连接
    goTo: function(url, options) {
      options = _.extend({
        trigger: true,
        replace: false
      }, options);

      Backbone.history.navigate(url, options);
    },
    initialize: function() {
      this.$header = $('header');
      prefix.events(this.el, 'AnimationEnd', _.bind(this._animationEnd, this));
      // 头部设置
    },
    _animationEnd: function(e) {
      var name = e.animationName;

      if (name === 'pageFromCenterToRight' || name === 'pageFromCenterToLeft') {
        this.remove();
      } else if (name === 'pageFromRightToCenter' || name === 'pageFromLeftToCenter') {
        this.$el.removeClass('page-from-left-to-center page-from-right-to-center');
      }
    }
  });

  return PageView;
});