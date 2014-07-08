var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: function () {
    return {
      frequency: 440,
      type: 0,
      sequence: []
    };
  }
});
