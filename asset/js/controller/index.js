/**
 * @fileoverview 首页控制器
 * @author wliao <wliao@Ctrip.com> 
 */
define([
  'text!indexHtml',
  'TopicCollection'
], function(indexHtml, TopicCollection) {
  var View = Backbone.View.extend({
    className: "index-page",
    template: _.template(indexHtml),
    events: {
      'click .js-page': 'pageAction',
      'click .js-topic-detail': 'detailAction'
    },
    initialize: function() {
      this.collection = new TopicCollection();
      this.collection.on('sync', this.render, this);
      this.collection.on('error', this.error, this);
      this.collection.fetch({
        data: {
          page: 1
        }
      });
    },
    render: function() {
      var html = this.template({
        topics: this.collection.toJSON()
      });

      this.$el.html(html);
    },
    error: function() {
      this.$el.html('出错了');
    },
    pageAction: function(e) {
      // 阻止默认事件
      e.preventDefault();
      var target = $(e.target);
      var page = target.data("page");

      this.collection.fetch({
        data: {
          page: page
        }
      });
    },
    detailAction: function(e) {
      var target = $(e.target);
      var id = target.data("id");

      Backbone.history.navigate('/topic/' + id);
    }
  });

  return View;
});