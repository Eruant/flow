var $ = require('jquery-browserify'),
  Backbone = require('backbone'),
  TrackView = require('./views/trackView');

// let backbone know about jQuery
Backbone.$ = $;

var view = new TrackView({
  el: $('#sequence-display')
});

view.tracks.add([
  {
    frequency: 100,
    sequence: [true, false, true, false, true, false, true, false]
  },
  {
    frequency: 200,
    sequence: [false, true, false, false, false, true, false, false]
  }
]);
