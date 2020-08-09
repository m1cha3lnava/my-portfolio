import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-white text-center">Error 404: Page Not Found</h1>
        <Footer />
      </div>
    );
  }
}

export default NoMatch;
