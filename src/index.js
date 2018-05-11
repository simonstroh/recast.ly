// TODO: Render the `App` component to the DOM
var options = {key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true', part: 'snippet'};
options.q = 'beyonce';

window.searchYouTube(options, function(data) {
  ReactDOM.render(<App data={data.items} />, document.getElementById('app'));  
});




