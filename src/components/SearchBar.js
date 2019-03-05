import React from "react";

export default class SearchBar extends React.Component {
  state = {
    term: ""
  };

  render() {
    return (
      <div>
        <form>
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
