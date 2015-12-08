function Track (attrs) {
  this.roll = attrs ? attrs.roll : [];
  this.name = attrs ? attrs.name : "";
}

Track.prototype = {
  startRecording: function () {
    this.roll = [];
    this.startTime = TimeUtil.currentTime()
  },

  addNotes: function (currentTime, notes) {
    // timeSlice is time elapsed since start of recording
    // notes is array of note names, ex: ["A3", "G4"...]
    var currentNotes = {
      timeSlice: currentTime - this.startTime,
      notes: notes
    }
    this.roll.push(currentNotes)
  },

  stopRecording: function () {
    this.addNotes(TimeUtil.currentTime(), [])
  },

  play: function () {
    if (this.interval) {
      return;
    }

    var currentNote = 0,
        playBackStartTime = TimeUtil.currentTime(),
        that = this;

    that.interval = setInterval( function () {
      // roll length minus 1 to account for last empty array pushed
      if (currentNote < that.roll.length -  1) {

        if ((TimeUtil.currentTime() - playBackStartTime) > that.roll[currentNote].timeSlice) {
          var notes = that.roll[currentNote].notes || []
          TrackActions.addKeysGroup(notes)
          currentNote++
        }
      } else {
        clearInterval(that.interval)
        delete that.interval;
      }
    }, 1)
  },

  roll: function () {
    return this.roll.slice()
  }
}
