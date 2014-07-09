var $ = require('jquery-browserify'),
  Backbone = require('backbone'),
  TrackCollection = require('./collections/trackCollection'),
  TrackView = require('./views/trackView');

// let backbone know about jQuery
Backbone.$ = $;

var track = new TrackCollection();

var view = new TrackView({
  el: $('#test'),
  model: track
});

track.add([{ frequency: 100 }, { frequency: 200 }]);
