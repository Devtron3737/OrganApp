var Key = React.createClass({
  getInitialState: function () {
    return {
      pressed: this.keyPressed()
    };
  },

  componentDidMount: function () {
    //var noteName = this.props.noteName;
    var freq = TONES[this.props.noteName];
    // right now freq is equaling whole props object (noteName: C5)
    var note = new Note(freq);
    this.note = note;

    KeyStore.addChangeListener(this._onChange);
  },

//checks for note in KeyStore, returns boolean
  keyPressed: function () {
    var note = this.props.noteName;
    var pressedNotes = KeyStore.all();
    return ($.inArray(note, pressedNotes) !== -1);
  },

// callback in KeyStore listener. starts and
// stops note depending on if in KeyStore.
// trigger re-render
  _onChange: function () {
    var pressed = this.keyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stops();
    }
    this.setState({pressed: pressed});
  },

  render: function () {
    var classText = 'key';
    classText += this.state.pressed ? " active" : "";
    return(
        <div className={classText} >{this.props.noteName}</div>
    );
  }
});
