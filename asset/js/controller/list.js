/**
 * @fileoverview 列表页控制器
 * @author wliao <wliao@Ctrip.com> 
 */
define([
  'text!listHtml',
  'hotTopic'
], function(listHtml, HotTopic) {
  var View = Backbone.View.extend({
    className: "list-page",
    events: {
    },
    render: function() {
      this.$el.html(listHtml);
      var topicView = new HotTopic();
      this.$el.append(topicView.el);
    }
  });

  return View;
});