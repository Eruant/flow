var Backbone = require('backbone'),
  _ = require('underscore'),
  ChannelView = require('./channelView.js');

module.exports = Backbone.View.extend({

  initialize: function () {
    window.console.log('init track view');
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    window.console.log('render track view');
    var self = this;

    self.$el.html('');

    _.each(this.model.toArray(), function (channel) {
      window.console.log('channel > ', channel);
      self.$el.append((new ChannelView({ model: channel })).render().$el);
    });
  }
});
