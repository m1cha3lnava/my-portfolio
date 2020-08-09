import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Linkedin } from "../../Images/Linkedin-profile.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-center text-white">Contact Me</h1>
          <div className="row-12">
            <div className="card-deck">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Phone</strong>
                    <br />
                    (256) 274-1771
                  </li>
                  <li className="list-group-item">
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:M!cha3l.nava@gmail.com">Michael Nava</a>
                  </li>
                  <li className="list-group-item">
                    <strong>Resume</strong>
                    <br /> <a href="./assets/resume 2020.pdf">PDF</a>
                  </li>
                </ul>
              </div>

              <div className="card">
                <img className="card-img-top" src={Linkedin} alt="Linkedin" />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a
                      href="https://www.linkedin.com/in/michael-nava-34783744/"
                      className="card-link"
                    >
                      Linkedin
                    </a>
                  </h5>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://github.blog/wp-content/uploads/2019/03/company-twitter.png?fit=1201%2C630"
                  alt="Github"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a
                      href="https://github.com/m1cha3lnava"
                      className="card-link"
                    >
                      Github
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
