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
        <button onClick={this.handleRecord} id='record-button' value='Record'/>
        <button onClick={this.handleStopRecord} id='stop-record-button' value='Stop Recording' />
        <button onClick={this.handlePlay} id='stop-record-button' value='Play' />
      </div>
    )
  }
})
