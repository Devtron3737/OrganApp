var TrackList = React.createClass({
  getInitialState: function () {
    return {tracks: ""}
  },

  componentDidMount: function () {
    TrackStore.addTrackChangeListener(this._onChange)
    TrackActions.fetchTracks()
  },

  componentWillUnmount: function () {
    TrackStore.removeTrackChangeListener(this._onChange)
  },

  _onChange: function () {
    this.setState({
      tracks: TrackStore.getTracks()
    })
  },

  render: function () {
    return( 
      <div id='track-list'>
        this.state.tracks.map( function (track) {
          return <TrackPlayer track={track} />
        })
      </div>
    )
  }
})
