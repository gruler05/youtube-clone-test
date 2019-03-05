import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
