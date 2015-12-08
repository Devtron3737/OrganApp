var TrackList = React.createClass({
  getInitialState: function () {
    return {tracks: TrackActions.getTracks()}
  },

  componentDidMount: function () {
    TrackStore.addTrackChangeListener(this._onChange)
  },

  componentWillUnmount: function () {
    TrackStore.removeTrackChangeListener(this._onChange)
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
