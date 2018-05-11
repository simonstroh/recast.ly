class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    var text = document.getElementById('search-input').value;
    this.props.onQueryChange(text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="search-bar form-inline">
        <input id="search-input" className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// can this be a stateless functional component