import React, { Component } from "react";
import EMAILS from "../MOCK_DATA.json";
import EmailRow from "./EmailRow";

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: EMAILS,
    };
  }

  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.state.emails.length} Emails </p>
        <div id="all-emails">
          {this.state.emails.map((email, index) => {
            return <EmailRow key={index} email={email} />;
          })}
        </div>
      </div>
    );
  }
}
