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
    if (!this.state.tracks) {
      return <div>Loading...</div>
    } else {
        return(
          <div id='track-list'>
            <h2 id='track-list-title'>Track List</h2>
            {
              this.state.tracks.map( function (track) {
              return <TrackPlayer track={track} />
              })
            }
          </div>
        )
    }
  }
})
