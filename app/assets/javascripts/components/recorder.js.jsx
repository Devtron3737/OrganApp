var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track(),
      name: ""
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

  handleChange: function () {
    this.setState({name: document.getElementById('name').value})
  },

  handleSave: function () {

    var trackAttrs = {
      name: document.getElementById('name').value,
      // track:
      roll: this.state.track.roll
    }

    TrackActions.save(trackAttrs)
  },

  render: function () {
    return(
      <div id='recorder-container'>
        <div id='instructions'>Use keys "a" through "k" to play!</div>
        <input type='button' onClick={this.handleRecord} className='button' value='record' />
        <input type='button' onClick={this.handleStopRecord} className='button'value='stop record' />
        <input type='button' onClick={this.handlePlay} className='button'value='play' />
        <input
          type='text'
          onChange={this.handleChange}
          id='name'
          placeholder="enter your masterpiece's name"
          value={this.state.name}
        />
      <input type='button' onClick={this.handleSave} className='button' value='save!' />
      </div>
    )
  }
})
