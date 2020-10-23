import React, { Component } from "react";
import "./App.css";
import FetchUser2 from "./components/FetchUser2";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <FetchUser2 />
      </div>
    );
  }
}

export default App;
