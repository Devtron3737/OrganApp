var OrganApp = React.createClass({
  render: function () {
    return(
      <div>
        <Organ />
        <Recorder />
        <TrackList />
      </div>
    )
  }
})

$(function () {
  React.render(
    <OrganApp />, document.getElementById('content')
  );
});
