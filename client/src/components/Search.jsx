import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text"
          name="productName" onChange={this.handleChange} />

        <button
          className="btn hidden-sm-down"
          onClick={() => { this.props.displaySearchedItem(this.state.productName) }}
        > Search
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    )
  }
}


export default Search;