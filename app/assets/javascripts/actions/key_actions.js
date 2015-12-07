( function (root) {
  var KeyActions = root.KeyActions = {
// action should format the event nicely, and then
// ask KeyDispatcher to .dispatch it
    keyPressed: function (noteName) {
      Dispatcher.dispatch({
        actionType: "key_pressed",
        noteName: noteName
      });
    },

    keyReleased: function (noteName) {
      Dispatcher.dispatch({
        actionType: "key_released",
        noteName: noteName
      });
    }
  };
})(this);
