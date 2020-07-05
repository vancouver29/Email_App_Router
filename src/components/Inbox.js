import React, { Component } from "react";
import EmailRow from "./EmailRow";

export default class Inbox extends Component {
  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.props.emails.length} Emails </p>
        <p>
          <button onClick={this.props.markSelectedRead}>mark read</button>
          <button onClick={this.props.markSelectedUnRead}>mark unread</button>
          <button onClick={this.props.selectAll}>select All</button>
          <button onClick={this.props.deSelectAll}>deselect All</button>
        </p>
        <div id="all-emails">
          {this.props.emails.map((email, index) => {
            return (
              <EmailRow
                key={index}
                email={email}
                isRead={this.props.isRead}
                isSelected={this.props.isSelected}
                markRead={this.props.markRead}
                markUnRead={this.props.markUnRead}
                select={this.props.select}
                deselect={this.props.deselect}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
