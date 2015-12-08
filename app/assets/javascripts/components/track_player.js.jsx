var TrackPlayer = React.createClass({
  render: function () {
    console.log(this.props.track)
    return(
      <div id='track-player'>
        {this.props.track.name}
      </div>
    )
  }
})
