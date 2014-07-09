var Backbone = require('backbone'),
  _ = require('underscore'),
  $ = require('jquery-browserify'),
  ChannelView = require('./channelView.js');

module.exports = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click .step': 'toggleStep'
  },

  render: function () {
    var self = this,
      count = 0,
      options;

    self.$el.html('');

    _.each(this.model.toArray(), function (channel) {
      options = {
        model: channel,
        attributes: {
          'data-channel': count
        }
      };
      self.$el.append((new ChannelView(options)).render().$el);
      count++;
    });
  },

  toggleStep: function (e) {
    e.preventDefault();

    var step, channel, value;

    step = $(e.currentTarget).data('step');
    channel = $(e.currentTarget).closest('.channel').data('channel');

    value = this.model.models[channel].get('sequence')[step];
    this.model.models[channel].get('sequence')[step] = !value;

    this.render();
  }
});
