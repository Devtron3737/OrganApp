var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track()
    }
  },

  handleRecord: function () {
    this.state.track.startRecording()
    this.setState({isRecording: true})
  },

  handleStopRecord: function () {
    this.state.track.stopRecording()
    this.setState({isRecording: false})
  },

  render: function () {
    return(
      <div>
        <button onClick={this.handleRecord} id='record-button' value='Record'/>
        <button onClick={this.handleStopRecord} id='stop-record-button' value='Stop' />
      </div>
    )
  }
})
