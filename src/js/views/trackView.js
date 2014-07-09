var Backbone = require('backbone'),
  _ = require('underscore'),
  $ = require('jquery-browserify'),
  ChannelView = require('./channelView.js'),
  TrackCollection = require('../collections/trackCollection'),
  templates = require('../templates'),
  AudioGenerator = require('../classes/audioGenerator');

module.exports = Backbone.View.extend({

  initialize: function () {
    this.tracks = new TrackCollection();
    this.audio = new AudioGenerator(this.tracks);

    this.listenTo(this.tracks, 'add', this.render);
    this.listenTo(this.tracks, 'change', this.render);
  },

  events: {
    'click .step': 'toggleStep',
    'blur .frequency': 'updateFrequency',
    'keypress .frequency': 'onEnterUpdateFrequency',
    'click .play': 'play',
    'click .stop': 'stop',
    'click .add-track': 'addTrack'
  },

  render: function () {
    var self = this,
      count = 0,
      options;

    self.$el.html('');

    _.each(this.tracks.toArray(), function (channel) {
      options = {
        model: channel,
        attributes: {
          'data-channel': count
        }
      };
      self.$el.append((new ChannelView(options)).render().$el);
      count++;
    });

    self.$el.append(templates['controls']({ play: 'Play audio', stop: 'Stop audio'}));
  },

  toggleStep: function (e) {
    e.preventDefault();

    var step = this.getStep(e.currentTarget),
      channel = this.getChannel(e.currentTarget);

    // reverse the value
    this.tracks.models[channel].get('sequence')[step] = !this.tracks.models[channel].get('sequence')[step];
    this.render();
  },

  updateFrequency: function (e) {
    e.preventDefault();

    var channel = this.getChannel(e.currentTarget),
      frequency = $(e.currentTarget).val();

    this.tracks.models[channel].set({ frequency: frequency });
  },

  onEnterUpdateFrequency: function (e) {

    if (e.keyCode === 13) {
      _.delay(function () {
        $(e.currentTarget).blur();
      }, 100);
    }
  },

  getStep: function (target) {
    return $(target).data('step');
  },

  getChannel: function (target) {
    return $(target).closest('.channel').data('channel');
  },

  play: function () {
    this.audio.play();
  },

  stop: function () {
    this.audio.stop();
  },

  addTrack: function () {
    this.tracks.add([{}]);
  }
});
