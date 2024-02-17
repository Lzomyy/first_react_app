import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Section />
        <Footer />
      </>
    );
  }
}
