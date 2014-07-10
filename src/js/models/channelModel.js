var Backbone = require('backbone'),
  cfg = require('../config');


module.exports = Backbone.Model.extend({
  defaults: function () {
    
    var sequenceArray = new Array(cfg.track.steps);

    for (var i = 0, il = sequenceArray.length; i < il; i++) {
      sequenceArray[i] = false;
    }

    return {
      frequency: 440,
      type: 0,
      sequence: sequenceArray
    };
  }
});
