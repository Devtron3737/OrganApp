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
      console.log('in save')
      console.log(JSON.stringify(trackAttrs))
      $.ajax({
        url: "/api/tracks",
        method: 'POST',
        contentType: 'application/json',
        // data: trackAttrs,
        data: JSON.stringify( {trackAttrs: trackAttrs} ),
        success: function (tracks) {
          console.log('successful save ajax')
          console.log(tracks)
          // Dispatcher.dispatch({
          //   actionType: "update_tracks",
          //   tracks: tracks
          // })
        },
        error: function (errors) {
          console.log('ajax error!')
          console.log(xhr)
          console.log(string)
          console.log(error)
        }
      })
    }
  }
})(this);
