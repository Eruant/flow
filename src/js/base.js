var $ = require('jquery-browserify'),
  Backbone = require('backbone'),
  TrackCollection = require('./collections/trackCollection'),
  TrackView = require('./views/trackView');

// let backbone know about jQuery
Backbone.$ = $;

var track = new TrackCollection();

var view = new TrackView({
  id: 'test',
  model: track
});

track.add([{ frequency: 100 }, { frequency: 200 }]);
window.console.log(track);

/*
var ChannelView = Backbone.View.extend({
  model: new Channel(),
  tagName: 'div',
  initialize: function () {
    this.template = _.template('<input class="frequency" value="<%= frequency %>">');
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var tune = new Tune();

var TuneView = Backbone.View.extend({
  model: tune,
  el: $('#test'),
  initialize: function () {
    this.model.on('add', this.render, this);
  },
  render: function () {
    var self = this;
    self.$el.html('');
    _.each(this.model.toArray(), function (channel) {
      self.$el.append((new ChannelView({ model: channel })).render().$el);
    });
    return this;
  }
});

$(window.document).ready(function () {
  $('.frequency').on('change', function () {
    var channel = new Channel({frequency: $(this).val(), sequence: [1, 0, 0, 0]});
    tune.add(channel);
    window.console.log(tune.toJSON);
  });

  window.console.log('creating view');
  var appView = new TuneView();
  window.console.log('appView', appView);

});
*/
