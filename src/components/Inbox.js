import React, { Component } from "react";
import EmailRow from "./EmailRow";

export default class Inbox extends Component {
  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.props.emails.length} Emails </p>
        <p>
          ***Click your left mouse wherever on the page to activate Keyboard
          Shortcuts ***
        </p>
        <p>j: to move down &#8595;</p>
        <p>k: to move up &#8593;</p>
        <p>x: to toggle Checkmark &#10004;</p>
        <p>
          <button onClick={this.props.markCheckedRead}>mark read</button>
          <button onClick={this.props.markCheckedUnRead}>mark unread</button>
          <button onClick={this.props.checkAll}>check All</button>
          <button onClick={this.props.unCheckAll}>unCheck All</button>
        </p>
        <div id="all-emails">
          {this.props.emails.map((email, index) => {
            return (
              <EmailRow
                key={index}
                email={email}
                isSelected={this.props.selectedIndex === index}
                isRead={this.props.isRead}
                isChecked={this.props.isChecked}
                markRead={this.props.markRead}
                markUnRead={this.props.markUnRead}
                check={this.props.check}
                unCheck={this.props.unCheck}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
