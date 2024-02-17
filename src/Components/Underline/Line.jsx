import React, { Component } from "react";
import "./Line.css";

export default class Line extends Component {
  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center my-2">
          <div className={"left " + this.props.colo}></div>
          <i className={"fa-solid fa-star " + this.props.coloo}></i>
          <div className={"right " + this.props.colo}></div>
        </div>
      </>
    );
  }
}
