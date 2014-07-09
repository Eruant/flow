var Backbone = require('backbone'),
  _ = require('underscore'),
  ChannelView = require('./channelView.js');

module.exports = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var self = this;

    self.$el.html('');

    _.each(this.model.toArray(), function (channel) {
      self.$el.append((new ChannelView({ model: channel })).render().$el);
    });
  }
});
