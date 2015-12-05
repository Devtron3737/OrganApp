var Track = React.createClass({
  componentDidMount: function () {
    this.name = ""
  },

  startRecording: function () {
    this.roll = [];
    this.startTime = new Date()
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
    this.addNotes(new Date(), [])
  },

  play: function () {
    
  }
})
