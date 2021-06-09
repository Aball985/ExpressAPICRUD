import React, { Component } from "react";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Add Tutorial</h1>
      </div>
    );
  }
}
