define(['config'], function(config) {
  // 单个model待定
  var Topic = Backbone.Model.extend({
    url: config.modelUrlRoot + 'topic'
  });

  return Topic;
});