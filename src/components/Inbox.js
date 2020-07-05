import React, { Component } from "react";
import EmailRow from "./EmailRow";

export default class Inbox extends Component {
  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.props.emails.length} Emails </p>
        <div id="all-emails">
          {this.props.emails.map((email, index) => {
            return (
              <EmailRow
                key={index}
                email={email}
                isRead={this.props.isRead}
                markRead={this.props.markRead}
                markUnRead={this.props.markUnRead}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
