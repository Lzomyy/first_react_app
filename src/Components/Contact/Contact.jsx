import React, { Component } from "react";
import Line from "../Underline/Line";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container p-4">
            <h1 className="text-center fw-bold color-port">CONATCT SECTION</h1>
            <Line />
            <form className="m-5 pt-3 w-75 mx-auto">
              <input
                placeholder="userName"
                className="form-control my-4"
                type="text"
              />
              <input
                placeholder="yourAge"
                className="form-control my-4"
                type="text"
              />
              <input
                placeholder="yourEmail"
                className="form-control my-4"
                type="email"
              />
              <input
                placeholder="yourPassword"
                className="form-control my-4"
                type="password"
              />
              <button className="btn bg-smawy text-white">Send Message</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
