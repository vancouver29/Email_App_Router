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
      isRead: {
        "4c29adf0-af6b-4e20-956c-105ba31b7152": true,
      },
    };

    this.markRead = this.markRead.bind(this);
    this.markUnRead = this.markUnRead.bind(this);
  }

  markRead(emailId) {
    let isRead = { ...this.state.isRead };
    isRead[emailId] = true;
    this.setState({ isRead });
  }

  markUnRead(emailId) {
    let isRead = { ...this.state.isRead };
    isRead[emailId] = false;
    this.setState({ isRead });
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
              component={() => (
                <Inbox
                  emails={this.state.emails}
                  isRead={this.state.isRead}
                  markRead={this.markRead}
                  markURead={this.markUnRead}
                />
              )}
            />
            <Route
              exact
              path="/read/:id"
              component={() => (
                <EmailRead
                  emails={this.state.emails}
                  markRead={this.markRead}
                />
              )}
            />
          </Fragment>
        </Router>
      </div>
    );
  }
}
