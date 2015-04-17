define(['config'], function(config) {
  var TopicCollection = Backbone.Collection.extend({
    url: config.modelUrlRoot + 'topics'
  });

  return TopicCollection;
});