var TrackPlayer = React.createClass({
  handlePlay: function () {
    this.props.track.play()
  },

  render: function () {
    return(
      <div className='track-player'>
        <div>{this.props.track.name}</div>
        <input type='button' onClick={this.handlePlay} className='play-button' value='play' />
      </div>
    )
  }
})
