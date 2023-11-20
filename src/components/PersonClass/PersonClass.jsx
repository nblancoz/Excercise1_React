import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <p>
          Person: Name: {this.props.name}, Surname: {this.props.surname}, Age: {this.props.age}
        </p>
      </div>
    );
  }
}

export default Person;
