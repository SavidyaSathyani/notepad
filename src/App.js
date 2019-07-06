import React from "react";
import firebase from "firebase";
import _ from "lodash";
import dotenv from 'dotenv';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header";
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"

dotenv.config();

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
      currentDetails: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentWillMount() {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
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
      details: this.state.currentDetails
    };

    firebase
      .database()
      .ref("/notes")
      .push(data, responce => responce);

    this.setState({
      currentTitle: "",
      currentDetails: ""
    });
  }

  deleteNote(id) {
    firebase.database().ref(`/notes/${id}`).remove();
    alert('Successfully deleted.');
  }

  render() {
    return (
      <Router>
        <div className={styles}>
          <Header name={this.state.name} />
          <Route exact path="/" render={(props) => (
            <Page1
              currentTitle={this.state.currentTitle}
              currentDetails={this.state.currentDetails}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              notes={this.state.notes} 
              deleteNode={this.deleteNote}
            />
          )} /> 
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </div>
      </Router>
    );
  }
}

export default App;
