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

    save: function (roll) {
      $.ajax({
        url: "/tracks",
        method: POST,
        data: {track: roll},
        success: function (tracks) {
          Dispatcher.dispatch({
            actionType: "update_tracks",
            tracks: tracks
          })
        }
      })
    }
  }
})(this);
