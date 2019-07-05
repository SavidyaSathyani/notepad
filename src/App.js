import React from "react";
import firebase from "firebase";
import _ from "lodash";

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
      notes: [],
      name: "Manny",
      currentTitle: "",
      currentdetails: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAtw_Bs82OSWvJVBfDLU3ZEUuG_BS1fDmQ",
      authDomain: "notepad-123.firebaseapp.com",
      databaseURL: "https://notepad-123.firebaseio.com"
    };
    firebase.initializeApp(config);

    firebase
      .database()
      .ref("/notes")
      .on("value", snapshot => {
        const fbStore = snapshot.val();
        const store = _.map(fbStore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details
          };
        });
        this.setState({
          notes: store
        });
      });
  }

  handleChange(event) {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      title: this.state.currentTitle,
      details: this.state.currentdetails
    };

    firebase
      .database()
      .ref("/notes")
      .push(data, responce => responce);

    this.setState({
      currentTitle: "",
      currentdetails: ""
    });
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
