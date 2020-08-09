import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfilePic from "../../Images/Profilepicture.jpg";

class Home extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="container bg-white">
          <div className="row">
            <div className="col-lg">
              <img src={ProfilePic} className="profilePic" alt="Profile" />
            </div>
            <div className="col-sm-9">
              <h1 className="text-center">Michael Nava</h1>

              <p className="text center" id="profileText">
                My name is Michael Nava. I was born in California and raised in
                North Alabama where I graduated from Austin High School. I was
                active in JROTC all 4 years and I played varsity soccer my
                Freshman year then ran track and cross country my Sophomore,
                Junior, and Senior years. I attended United States Military
                Academy West Point for my Freshman year then I attended Calhoun
                Community College and finally the University of Alabama in
                Huntsville. I pursued the fields of Computer Information
                Systems, Computer Science, and Industrial Engineering. My last
                job was a Controlman at General Electric Appliances where I was
                tasked with minimizing downtime, performed level 1 maintenance
                and preventative maintenance for several departments. I took the
                chance to enroll in the Georgia Tech coding bootcamp to become
                employer competitive in the tech industry.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
