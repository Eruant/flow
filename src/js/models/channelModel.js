var Backbone = require('backbone');

var sequenceArray = new Array(16);

for (var i = 0, il = sequenceArray.length; i < il; i++) {
  sequenceArray[i] = false;
}

module.exports = Backbone.Model.extend({
  defaults: function () {
    return {
      frequency: 440,
      type: 0,
      sequence: sequenceArray.slice(0)
    };
  }
});
