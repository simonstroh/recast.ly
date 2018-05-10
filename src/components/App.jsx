class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: this.props.data[0]
    };
  }

  handleClick(event) {
    if (event.target.className === 'video-list-entry-title') {
      this.props.data.forEach((video, index) => {
        if (video.snippet.title === event.target.innerHTML) {
          this.setState({ videoPlayer: this.props.data[index] });
        }
      });
    }
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlayer} />
          </div>
          <div onClick={this.handleClick.bind(this)} className="col-md-5">
            <VideoList videos={this.props.data} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;