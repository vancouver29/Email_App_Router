import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Inbox from "./Inbox";
import EmailRead from "./EmailRead";

import EMAILS from "../MOCK_DATA.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: EMAILS,
    };
  }

  render() {
    return (
      <div id="app-container">
        <Router>
          <Fragment>
            <Nav />
            <Route
              exact
              path="/"
              component={() => <Inbox emails={this.state.emails} />}
            />
            <Route
              exact
              path="/read/:id"
              component={() => <EmailRead emails={this.state.emails} />}
            />
          </Fragment>
        </Router>
      </div>
    );
  }
}
