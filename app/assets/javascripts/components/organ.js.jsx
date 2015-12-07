var Organ = React.createClass({
  render: function () {
    return(
      <div className="organ">
        {
          Object.keys(TONES).map(function (noteName) {
            return(
              <Key key={noteName} noteName={noteName} />
            );
          })
        }
      </div>

    );
  }
});
