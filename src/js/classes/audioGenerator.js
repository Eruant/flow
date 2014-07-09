//var AudioData = require('./AudioData');

var AudioGenerator = function (model) {

  try {

    var ac = window.AudioContext || window.webkitAudioContext;
    this.ctx = new ac();
    this.oscillators = [];
    this.audioData = {};
    this.notes = [];
    this.interval = null;
    this.model = model;
    this.bpm = (60 / 220) * 1000;

    this.volumeNode = this.ctx.createGainNode();
    this.volumeNode.gain.value = 1;
    this.volumeNode.connect(this.ctx.destination);

    this.volumeNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime);
    this.volumeNode.gain.linearRampToValueAtTime(1, this.ctx.currentTime + 2);

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

      for (var i = 0, il = this.model.models.length; i < il; i++) {
        if (this.model.models[i].get('sequence')[sequencePosition]) {
          this.addNote(this.model.models[i].get('frequency'));
        }
      }

      this.playNote();

      sequencePosition++;
      if (sequencePosition > this.model.models[0].get('sequence').length - 1) {
        sequencePosition = 0;
      }
    }.bind(this), this.bpm);
  },

  stop: function () {
    window.clearInterval(this.interval);
    this.interval = null;
    this.stopNote();
  },

  playNote: function () {

    var i, il, note, oscillator, gain, time;

    i = 0;
    il = this.notes.length;
    time = 0.1;

    for (; i < il; i++) {
      gain = this.ctx.createGainNode();
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(1, this.ctx.currentTime + time);
      gain.gain.linearRampToValueAtTime(1, this.ctx.currentTime + (this.bpm / 1000) - time);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + (this.bpm / 1000));
      note = this.notes[i];
      oscillator = this.ctx.createOscillator();
      oscillator.type = 0;                           // { 0: sine, 1: square, 2: sawtooth, 3: triangle }
      oscillator.frequency.value = note; // hertz
      oscillator.connect(gain);
      gain.connect(this.volumeNode);
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
