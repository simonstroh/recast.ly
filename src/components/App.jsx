class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      videoPlayer: this.props.data[0],
    };
  }

  handleClick(event) {
    if (event.target.className === 'video-list-entry-title') {
      this.state.data.forEach(video => {
        if (video.snippet.title === event.target.innerHTML) {
          this.setState({ videoPlayer: video });
        }
      });
    }
  }

  generateNewData(query) {
    var options = {key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true', part: 'snippet'};
    options.q = query;
    window.searchYouTube(options, (data) => {
      this.setState({ data: data.items, videoPlayer: data.items[0] });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div onClick={this.handleChange} className="col-md-6 offset-md-3">
            <Search onQueryChange={this.generateNewData.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlayer} />
          </div>
          <div onClick={this.handleClick.bind(this)} className="col-md-5">
            <VideoList videos={this.state.data} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// if window.searchResults [changes]...render()