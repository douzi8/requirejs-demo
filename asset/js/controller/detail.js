define([
  'TopicModel'
], function(TopicModel) {
  var View = Backbone.View.extend({
    initialize: function(options) {
      this.model = new TopicModel(options);

      this.model.fetch();
    },
    render: function() {
      
    }
  });

  return View;
});