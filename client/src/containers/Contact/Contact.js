import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-white">Contact Me</h1>
        <Footer />
      </div>
    );
  }
}

export default Contact;
