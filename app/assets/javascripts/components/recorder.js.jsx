var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track()
    }
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._onKeyChange)
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeListener(this._onKeyChange)
  },

  _onKeyChange: function () {
    this.state.track.addNotes(new Date(), KeyStore.all())
    console.log('in onKeyChange')
  },

  handleRecord: function () {
    this.state.track.startRecording()
    this.setState({isRecording: true})
  },

  handleStopRecord: function () {
    this.state.track.stopRecording()
    this.setState({isRecording: false})
  },

  handlePlay: function () {
    this.state.track.play()
  },

  render: function () {
    return(
      <div>
        <input type='button' onClick={this.handleRecord} id='record-button' value='record' />
        <input type='button' onClick={this.handleStopRecord} id='stop-record-button'value='stop record' />
        <input type='button' onClick={this.handlePlay} id='play-button'value='play' />
      </div>
    )
  }
})
