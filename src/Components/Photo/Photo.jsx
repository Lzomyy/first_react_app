import React, { Component } from "react";
import "./Photo.css";
export default class Photo extends Component {
  render() {
    let { dis: display } = this.props;
    return (
      <>
        <div className="col-md-4">
          <div
            onClick={() => {
              display(this.props.myImage);
            }}
            className="rounded-3 overflow-hidden position-relative"
          >
            <div className="position-absolute w-100 h-100 bg-smawy d-flex justify-content-center align-items-center photo">
              <i class="fa-solid fa-plus fs-2 text-white"></i>
            </div>
            <img src={this.props.myImage} alt="" className="w-100" />
          </div>
        </div>
      </>
    );
  }
}
