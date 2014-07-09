var Backbone = require('backbone'),
  templates = require('../templates.js'),
  ChannelModel = require('../models/channelModel');

module.exports = Backbone.View.extend({
  model: new ChannelModel(),
  tagName: 'div',
  className: 'channel',
  initialize: function () {
    this.template = templates['channel'];
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
