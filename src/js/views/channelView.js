var Backbone = require('backbone'),
  _ = require('underscore'),
  ChannelModel = require('../models/channelModel');

module.exports = Backbone.View.extend({
  model: new ChannelModel(),
  tagName: 'div',
  initialize: function () {
    this.template = _.template('<span class="frequency"><%= frequency %></span>');
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
