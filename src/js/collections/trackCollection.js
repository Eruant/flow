var Backbone = require('backbone'),
  channelModel = require('../models/channelModel'),
  cfg = require('../config');

module.exports = Backbone.Collection.extend({
  bpm: cfg.track.bpm,
  steps: cfg.track.steps,
  model: channelModel
});
