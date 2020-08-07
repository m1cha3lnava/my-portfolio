import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


class Home extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
        <h1>This is my Homepage</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;
