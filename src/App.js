import React, { Component } from "react";
import "./App.css";
import FetchUser2 from "./components/FetchUser2";
import { Container } from "react-bootstrap";


class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        This is working
        
         <FetchUser2 />
      </div>
    );
  }
}

export default App;
