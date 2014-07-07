var AudioData = require('./AudioData');

var AudioGenerator = function () {

  try {

    var ac = window.AudioContext || window.webkitAudioContext;
    this.ctx = new ac();
    this.oscillators = [];
    this.audioData = {};
    this.notes = [];
    this.interval = null;

    this.audioData = new AudioData();

    var channel = this.audioData.addChannel(100, 0);
    this.audioData.toggleStep(channel, 0);
    this.audioData.toggleStep(channel, 2);
    this.audioData.toggleStep(channel, 4);
    this.audioData.toggleStep(channel, 6);

    channel = this.audioData.addChannel(200, 0);
    this.audioData.toggleStep(channel, 1);
    this.audioData.toggleStep(channel, 3);
    this.audioData.toggleStep(channel, 5);
    this.audioData.toggleStep(channel, 7);

  } catch (e) {
    throw {
      name: 'AudioGenerator',
      msg: e
    };
  }

};

AudioGenerator.prototype = {

  addNote: function (frequency) {
    this.notes.push(frequency);
  },

  play: function () {

    var sequencePosition = 0;

    this.interval = window.setInterval(function () {

      this.stopNote();

      for (var i = 0, il = this.audioData.channels.length; i < il; i++) {
        if (this.audioData.channels[i].sequence[sequencePosition] === 1) {
          this.addNote(this.audioData.channels[i].frequency);
        }
      }

      this.playNote();

      sequencePosition++;
      if (sequencePosition > this.audioData.sequenceLength) {
        sequencePosition = 0;
      }
    }.bind(this), this.audioData.stepTime);
  },

  stop: function () {
    window.clearInterval(this.interval);
    this.interval = null;
    this.stopNote();
  },

  playNote: function () {

    var i, il, note, oscillator;

    i = 0;
    il = this.notes.length;

    for (; i < il; i++) {
      note = this.notes[i];
      oscillator = this.ctx.createOscillator();
      oscillator.type = 0;                           // { 0: sine, 1: square, 2: sawtooth, 3: triangle }
      oscillator.frequency.value = note; // hertz
      oscillator.connect(this.ctx.destination);      // connect to speakers
      oscillator.noteOn(0);
      this.oscillators.push(oscillator);
    }

  },

  stopNote: function () {
    var i = 0,
      il = this.oscillators.length,
      item;

    for (; i < il; i++) {
      item = this.oscillators[i];
      item.noteOff(0);
    }

    this.oscillators = [];
    this.notes = [];
  }
};

module.exports = AudioGenerator;
