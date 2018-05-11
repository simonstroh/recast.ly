class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    this.props.onQueryChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.handleSubmit.bind(this)} id="search-input" className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// can this be a stateless functional component