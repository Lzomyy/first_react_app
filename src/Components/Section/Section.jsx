import React, { Component } from "react";

export default class Section extends Component {
  render() {
    return (
      <>
        <div className="color text-white text-center p-4">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <h3>AROUND THE WEB</h3>
                  <ul>
                    <i class="fa-brands fa-facebook mx-1 icon"></i>
                    <i class="fa-brands fa-twitter mx-1 icon"></i>
                    <i class="fa-brands fa-linkedin-in mx-1 icon"></i>
                    <i class="fa-solid fa-globe mx-1 icon"></i>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
