(function (root) {
  var _tracks = [],
      TRACK_CHANGE = "track_change"

  var TrackStore = root.TrackStore = $.extend(
    {},
    EventEmitter.prototype,
    {
      dispatcherId: Dispatcher.register( function (payLoad) {
        switch (payLoad.actionType) {
          case "update_tracks":
            TrackStore.updateTracks(payLoad.tracks)
            break;
        }
      }),

      getTracks: function () {
        return _tracks.slice()
      },

      updateTracks: function (tracks) {
        _tracks = tracks;

        this.emit(TRACK_CHANGE)
      },

      addTrackChangeListener: function (callback) {
        this.on(TRACK_CHANGE, callback)
      },

      removeTrackChangeListener: function (callback) {
        this.removeListener(TRACK_CHANGE, callback)
      }
    }
  )
})(this)
