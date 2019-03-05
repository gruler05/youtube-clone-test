import React from "react";

export default class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onInputSubmit}>
          <div className="field">
            <label>Search Videos</label>
          </div>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
