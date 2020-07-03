import React, { Component } from "react";

export default class EmailRead extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.email.subject}</h1>
        <h3>
          {this.props.email.date} {this.props.email.email}
        </h3>
        <p>{this.props.email.body}</p>
      </div>
    );
  }
}
