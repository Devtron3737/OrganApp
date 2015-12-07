( function (root) {
  var TrackActions = root.TrackActions = {
    // add a group update of notes, so that the
    // whole keystore gets replaced
    addKeysGroup: function (keys) {
      KeyDispatcher.dispatch({
          actionType: "key_group_update",
          keyGroup: keys
      })
    },

    save: function (roll) {
      $.ajax({
        url: "/tracks",
        method: POST,
        data: roll,
        success: function (tracks) {
          KeyDispatcher.dispatch({
            actionType: "update_tracks",
            tracks: tracks
          })
        }
      })
    }
  }
})(this);
