(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AudioGenerator = require('./classes/audioGenerator');

module.exports = {

  init: function () {

    this.ag = new AudioGenerator();
    this.buttons = {
      start: window.document.getElementById('start-button'),
      stop: window.document.getElementById('stop-button')
    };

    this.buttons.start.addEventListener('click', this.startAudio.bind(this), false);
    this.buttons.stop.addEventListener('click', this.stopAudio.bind(this), false);
  },

  startAudio: function () {
    this.ag.addNote(50);
    this.ag.addNote(100);
    this.ag.addNote(150);
    this.ag.play();
  },

  stopAudio: function () {
    this.ag.stop();
  }

};

module.exports.init();

},{"./classes/audioGenerator":2}],2:[function(require,module,exports){
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

},{}]},{},[1])