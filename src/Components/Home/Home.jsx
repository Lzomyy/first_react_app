import React, { Component } from "react";
import "./Home.css";
import { ReactComponent as Photo } from "../../assets/avataaars.svg";
import Line from "../Underline/Line";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="color_h">
          <div className="container text-center text-white  p-5">
            <Photo className="spec_photo my-4" />
            <h2 className="fw-bold">START FRAMEWORK</h2>
            <Line colo="bg-white" coloo="text-white" />
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}
