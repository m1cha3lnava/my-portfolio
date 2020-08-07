import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="container bg-white">
          <h1 className="text-center">Michael Nava</h1>
          <div className="col-sm-9">
            <p className="text center" id="profileText">
              My name is Michael Nava. I was born in California and raised in
              North Alabama where I graduated from Austin High School. I was
              active in JROTC all 4 years and I played varsity soccer my
              freshman year then ran track and cross country my sophomore,
              junior, and senior years. I attended Unite States Military Academy
              West Point for my Freshman year then I attended Calhoun Community
              College and finally the University of Alabama in Huntsville. I
              pursued the fields of Computer Information Systems, Computer
              Science, and Industrial Engineering. My last job was a Controlman
              at General Electric Appliances where I was tasked with minimizing
              downtime, performed level 1 maintenance and preventative
              maintenance for several departments. I took the chance to enroll
              in the Georgia Tech coding bootcamp to become employer competitive
              in the tech industry.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
