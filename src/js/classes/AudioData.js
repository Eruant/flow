var AudioData = function () {

  this.stepTime = 250;
  this.sequenceLength = 8;
  this.channels = [];
};

AudioData.prototype = {

  addChannel: function (frequency, type) {

    var channel, i, il;
    
    channel = {
      frequency: frequency,
      type: type || 0,
      sequence: []
    };

    i = 0;
    il = this.sequenceLength;

    for (; i < il; i++) {
      channel.sequence[i] = 0;
    }

    this.channels.push(channel);

    return this.channels.length - 1;
  },

  toggleStep: function (channel, step) {

    var item = this.channels[channel].sequence[step];

    if (item === 1) {
      item = 0;
    } else if (item === 0) {
      item = 1;
    }

    this.channels[channel].sequence[step] = item;
  }

};

module.exports = AudioData;
