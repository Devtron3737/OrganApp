var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track()
    }
  },

  _onKeyChange: function () {
    this.state.track.addNotes(new Date(), KeyStore.all())
  },

  handleRecord: function () {
    KeyStore.addChangeListener(this._onKeyChange)
    this.state.track.startRecording()
    this.setState({isRecording: true})
  },

  // i never stop recording, and am just
  // recording what was just played every time

  handleStopRecord: function () {
    KeyStore.removeChangeListener(this._onKeyChange)
    this.state.track.stopRecording()
    this.setState({isRecording: false})
  },

  handlePlay: function () {
    this.state.track.play()
  },

  handleSave: function () {
    console.log('in handle save')
    console.log(this.state.track.roll)
    TrackActions.save(this.state.track.roll)
  },

  render: function () {
    return(
      <div>
        <input type='button' onClick={this.handleRecord} id='record-button' value='record' />
        <input type='button' onClick={this.handleStopRecord} id='stop-record-button'value='stop record' />
        <input type='button' onClick={this.handlePlay} id='play-button'value='play' />
        <input type='button' onClick={this.handleSave} id='save-button'value='save' />
      </div>
    )
  }
})
