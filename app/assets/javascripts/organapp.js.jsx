var OrganApp = React.createClass({
  render: function () {
    return(
      <div id='app-background'>
        <h1 id='title'>Cool Purple Organ</h1>
        <div id='organ-container'>
          <Organ />
          <Recorder />
        </div>

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
