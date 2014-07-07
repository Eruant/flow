var AudioGenerator = function () {

  try {

    var ac = window.AudioContext || window.webkitAudioContext;
    this.ctx = new ac();
    this.oscillators = [];
    this.notes = [];

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

  stop: function () {
    var i = 0,
      il = this.oscillators.length,
      item;

    for (; i < il; i++) {
      item = this.oscillators[i];
      item.noteOff(0);
    }

    this.oscillators = [];
  }
};

module.exports = AudioGenerator;
