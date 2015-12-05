$(function () {
  $(document).on('keydown', function (e) {
    handleKeyChange(e);
  });

  $(document).on('keyup', function (e) {
    handleKeyChange(e);
  });

  var keyNoteNames = {
    65: "C5", // 'a'
    83: "D5", // 's'
    68: "E5", // 'd'
    70: "F5", // 'f'
    71: "G5", // 'g'
    72: "A5", // 'h'
    74: "B5", // 'j'
    75: "C6" // 'k'
  };

  var handleKeyChange = function (e) {
    // checks that key pressed is a valid note
    if ($.inArray(String(e.which), Object.keys(keyNoteNames)) === -1) {
      return;
    }

    var noteName = keyNoteNames[event.which];
    event.type === "keydown" ?
      KeyActions.keyPressed(noteName) :
      KeyActions.keyReleased(noteName);
  };
});
