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
