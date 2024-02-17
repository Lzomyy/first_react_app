import React, { Component } from "react";
import Line from "../Underline/Line";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="color_h height d-flex justify-content-center align-items-center">
          <div className="container">
            <h1 className="text-center text-white fw-bold">ABOUT COMPONENT</h1>
            <Line colo="bg-white" coloo="text-white" />
            <div className="d-flex justify-content-around text-white">
              <p className="width_p">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="width_p">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
