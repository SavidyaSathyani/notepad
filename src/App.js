import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Form from "./components/Form";

const styles = {
  textAlign: "center",
  margin: 10,
  padding: 20,
  FontFamily: "sans-serif"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Add Course notes",
          details: "sdgfjdsfjhdsgfjhdsgfjhd jsdhgfjsdfggjgdjhfg"
        },
        {
          id: 2,
          title: "Add Course notes 2",
          details: "sdgfjdsfjhdsgfjhdsgfjhd jsdhgfjs fdgfg dfggjgdjhfg"
        },
        {
          id: 3,
          title: "Add Course notes 3",
          details: "sdgfjdsfjhdsgfjhdsgfjhd jsdhgfjsdffgf gfgfgg gjgdjhfg"
        }
      ],
      name: "Manny",
      currentTitle: "",
      currentdetails: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(`Your note ${this.state.currentTitle} has been added.`);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles}>
        <Header name={this.state.name} />
        <Form
          currentTitle={this.state.currentTitle}
          currentdetails={this.state.currentdetails}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Grid notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
