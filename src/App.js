import React, { Component } from "react";
import Manual from "./Manual";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CSVテキスト変換ツール</h1>
        <Manual />
      </div>
    );
  }
}

export default App;
