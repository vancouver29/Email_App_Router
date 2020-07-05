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
      isRead: {},
      isSelected: {},
    };

    this.markRead = this.markRead.bind(this);
    this.markUnRead = this.markUnRead.bind(this);
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
    this.markSelectedRead = this.markSelectedRead.bind(this);
    this.markSelectedUnRead = this.markSelectedUnRead.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deSelectAll = this.deSelectAll.bind(this);
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

  select(emailId) {
    let isSelected = { ...this.state.isSelected };
    isSelected[emailId] = true;
    this.setState({ isSelected });
  }

  deselect(emailId) {
    let isSelected = { ...this.state.isSelected };
    isSelected[emailId] = false;
    this.setState({ isSelected });
  }

  markSelectedRead() {
    let isRead = { ...this.state.isRead };
    for (let key in this.state.isSelected) {
      if (this.state.isSelected[key]) {
        isRead[key] = true;
      }
    }

    this.setState({ isRead });
  }

  markSelectedUnRead() {
    let isRead = { ...this.state.isRead };
    for (let key in this.state.isSelected) {
      if (this.state.isSelected[key]) {
        isRead[key] = false;
      }
    }

    this.setState({ isRead });
  }

  selectAll() {
    let isSelected = {};
    for (let email of this.state.emails) {
      isSelected[email.id] = true;
    }

    this.setState({ isSelected });
  }

  deSelectAll() {
    this.setState({ isSelected: {} });
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
                  isSelected={this.state.isSelected}
                  markRead={this.markRead}
                  markUnRead={this.markUnRead}
                  select={this.select}
                  deselect={this.deselect}
                  markSelectedRead={this.markSelectedRead}
                  markSelectedUnRead={this.markSelectedUnRead}
                  selectAll={this.selectAll}
                  deSelectAll={this.deSelectAll}
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
