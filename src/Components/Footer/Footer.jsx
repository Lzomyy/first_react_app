import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="color_f py-3">
          <div className="container">
            <h6 className="text-center text-white">
              Copyright © Your Website 2021
            </h6>
          </div>
        </div>
      </>
    );
  }
}
