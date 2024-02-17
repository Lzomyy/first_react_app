import React, { Component } from "react";
import Line from "../Underline/Line";
import myImage1 from "../../images/poert1.png";
import myImage2 from "../../images/port2.png";
import myImage3 from "../../images/port3.png";
import Photo from "../Photo/Photo";

export default class Portfolio extends Component {
  state = {
    path: false,
  };

  displayPhoto = (path) => {
    let copyOfPath = this.state.path;
    copyOfPath = path;
    this.setState({ path: copyOfPath });
  };

  render() {
    return (
      <>
        <div>
          <div className="container p-5 color-port">
            <h1 className="text-center fw-bold">PORTFOLIO COMPONENT</h1>
            <Line />
            <div className="row gy-4 mt-3">
              <Photo dis={this.displayPhoto} myImage={myImage1} />
              <Photo dis={this.displayPhoto} myImage={myImage2} />
              <Photo dis={this.displayPhoto} myImage={myImage3} />
              <Photo dis={this.displayPhoto} myImage={myImage1} />
              <Photo dis={this.displayPhoto} myImage={myImage2} />
              <Photo dis={this.displayPhoto} myImage={myImage3} />
            </div>
          </div>

          {this.state.path ? (
            <div
              onClick={(e) =>
                e.target.src ? "" : this.setState({ path: false })
              }
              className="position-fixed w-100 h-100 bg-smawy start-0 top-0 d-flex justify-content-center align-items-center"
            >
              <img src={this.state.path} alt="" className="w-50" />
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
