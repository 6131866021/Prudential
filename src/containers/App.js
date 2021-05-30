import React, { Component } from "react";
import classes from "./App.css";
import Form from "../components/example/Form";
import TodoList from "../components/example/TodoList";
import Main from "../components/Main";

class App extends Component {
  // const routes = (
  // <Switch location={location} key={location.pathname}>
  //     <Route path="/" exact component={AuthPage} />
  //     <Route path="/selectinterests" exact component={SelectInterestPage} />
  //     <Route path="/personalInformation" exact component={PersonalInfoPage} />
  //     <Route path="/friendlists" exact component={FriendsPage} />
  // </Switch>
  // );

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.AppContainer}>
          <Main />
          {/* <Form />
          <TodoList /> */}
        </div>
      </div>
    );
  }
}

export default App;
