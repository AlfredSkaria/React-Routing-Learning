import React, { Component } from "react";
import "./Course.css";
class Course extends Component {
  render() {
    return (
      <article className="Course">
        <h1>{this.props.title}</h1>
        <p>You selected the Course with ID: {this.props.id}</p>
      </article>
    );
  }
}

export default Course;
