var TrackPlayer = React.createClass({
  handlePlay: function () {
    this.props.track.play()
  },

  render: function () {
    return(
        <input type='button' onClick={this.handlePlay} className='button track' value={this.props.track.name} />
    )
  }
})
