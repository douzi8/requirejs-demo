define([
  'text!topicHtml'
], function(topicHtml) {
  var TopicView = Backbone.View.extend({
    events: {

    },
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(topicHtml);
    }
  });

  return TopicView;
});