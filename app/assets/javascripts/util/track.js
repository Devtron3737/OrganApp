function Track () {
  this.roll = []
}

Track.prototype = {
  startRecording: function () {
    this.roll = [];
    this.startTime = TimeUtil.currentTime()
    console.log('in tracks start recoding')
    console.log(TimeUtil.currentTime())
    console.log(this.startTime)
  },

  addNotes: function (currentTime, notes) {
    // timeSlice is time elapsed since start of recording
    // notes is array of note names, ex: ["A3", "G4"...]
    var currentNotes = {
      timeSlice: currentTime - this.startTime,
      notes: notes
    }
    this.roll.push(currentNotes)
    console.log('in tracks addNotes. heres the roll')
    console.log(this.roll)
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


    this.interval = setInterval( function () {
      if (currentNote <= that.roll.length) {
        if (that.roll[currentNote].timeSlice > (TimeUtil.currentTime() - playBackStartTime)) {
          TrackActions.addKeysGroup(that.roll[currentNote].notes)
          currentNote++
        }
      } else {
        clearInterval(that.interval)
        delete that.interval
      }
    }, 1)
  }
}
