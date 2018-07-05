import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <form className="input-group">
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="Get a 5-day forecast in City"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
