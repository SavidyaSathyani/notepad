import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Manny"
    };
  }

  componentDidMount() {
    console.log("component just loaded");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Intro name={this.state.name} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
