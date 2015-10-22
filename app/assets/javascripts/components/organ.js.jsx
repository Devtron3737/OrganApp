var Organ = React.createClass({
  render: function () {
    return(
      <div className="organ">
        {
          Object.keys(TONES).map(function (noteName) {
            return(
              <Key noteName={noteName} />
            );
          })
        }
      </div>

    );
  }
});

$(function () {
  React.render(
    <Organ />, document.getElementById('content')
  );
});
