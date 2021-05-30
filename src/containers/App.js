import React, { Component } from "react";
import classes from "./App.css";
import Form from "../components/example/Form";
import TodoList from "../components/example/TodoList";
import Main from "../components/Main";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.AppContainer}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
