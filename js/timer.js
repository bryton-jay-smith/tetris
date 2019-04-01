function Timer() {
  this.timer = undefined;
}

Timer.prototype = {

  start: function(handler) {
    var timeLapse = 1000;

    this.timer = setTimeout(handler,timeLapse);
  },

  clear: function() {
    clearTimeout(this.timer);
  }

};
