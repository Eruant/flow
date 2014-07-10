var Backbone = require('backbone'),
  channelModel = require('../models/channelModel'),
  cfg = require('../config');

Backbone.LocalStorage = require('backbone.localstorage');

module.exports = Backbone.Collection.extend({
  bpm: cfg.track.bpm,
  steps: cfg.track.steps,
  model: channelModel,
  localStorage: new Backbone.LocalStorage("flowTrackCollection")
});
