var Track = React.createClass({
  componentDidMount: function () {
    this.name = ""
  },

  startRecording: function () {
    this.roll = [];
    this.startTime = TimeUtil.currentTime
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
    this.addNotes(TimeUtil.currentTime, [])
  },

  play: function () {
    if (this.interval) {
      return;
    }

    var currentNote = 0,
        playBackStartTime = TimeUtil.currentTime()


    this.interval = setInterval( function () {
      if (currentNote <= this.roll.length) {
        if (this.roll[currentNote].timeSlice > (TimeUtil.currentTime - playBackStartTime)) {

        }
      }
    }, 1)
  }
})
