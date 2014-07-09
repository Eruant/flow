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
    frequency: 261.6,
    sequence: [true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false]
  },
  {
    frequency: 277.2,
    sequence: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]
  },
  {
    frequency: 293.7
  },
  {
    frequency: 311.1
  },
  {
    frequency: 329.6
  },
  {
    frequency: 349.2,
    sequence: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
  },
  {
    frequency: 370.0
  },
  {
    frequency: 392.0,
    sequence: [false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false]
  },
  {
    frequency: 415.3,
    sequence: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false]
  },
  {
    frequency: 440
  },
  {
    frequency: 466.2,
    sequence: [true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false]
  },
  {
    frequency: 493.9,
    sequence: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]
  }
]);
