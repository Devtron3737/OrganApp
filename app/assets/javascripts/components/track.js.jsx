var Track = React.createClass({
  componentDidMount: function () {
    this.name = ""
  },

  startRecording: function () {
    this.roll = [];
    this.startTime = new Date()

  },

  addNotes: function (timeSlice, notes) {
    // timeSlice is time elapsed since start of recording
    // notes is array of note names, ex: ["A3", "G4"...]
    var currentNotes = {
      timeSlice: timeSlice,
      notes: notes
    }
    this.roll.push(currentNotes)
  },

  stopRecording: function () {
    var timeSlice = (new Date()) - this.startTime
    this.addNotes(timeSlice, [])
  }
})
