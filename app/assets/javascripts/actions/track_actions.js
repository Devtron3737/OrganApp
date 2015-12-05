( function (root) {
  var TrackActions = root.TrackActions = {
    // add a group update of notes, so that the
    // whole keystore gets replaced
    addKeysGroup: function (keys) {
      KeyDispatcher.dispatch({
          actionType: "key_group_update",
          keyGroup: keys
      })
    }
  }
})(this);
