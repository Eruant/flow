var Backbone = require('backbone'),
  channelModel = require('../models/channelModel');

module.exports = Backbone.Collection.extend({
  bpm: 90,
  steps: 4,
  model: channelModel
});
