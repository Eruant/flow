var $ = require('jquery-browserify'),
  Backbone = require('backbone'),
  TrackCollection = require('./collections/trackCollection'),
  TrackView = require('./views/trackView');

// let backbone know about jQuery
Backbone.$ = $;

var track = new TrackCollection();

var view = new TrackView({
  el: $('#sequence-display'),
  model: track
});

track.add([
  {
    frequency: 100,
    sequence: [true, false, true, false, true, false, true, false]
  },
  {
    frequency: 200,
    sequence: [false, true, false, false, false, true, false, false]
  }
]);
