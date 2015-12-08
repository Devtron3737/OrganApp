( function (root) {
  var TrackActions = root.TrackActions = {
    // add a group update of notes, so that the
    // whole keystore gets replaced
    addKeysGroup: function (keys) {
      Dispatcher.dispatch({
          actionType: "key_group_update",
          keyGroup: keys
      })
    },

    save: function (trackAttrs) {
      $.ajax({
        url: "/api/tracks",
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {trackAttrs: trackAttrs} ),
        success: function (tracks) {
          Dispatcher.dispatch({
            actionType: "update_tracks",
            tracks: tracks
          })
        },
        error: function (errors) {
        }
      })
    }
  }
})(this);
