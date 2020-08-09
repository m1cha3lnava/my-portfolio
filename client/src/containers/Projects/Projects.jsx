import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Project1 from "../../Images/screenshot-project-1.png";
import Project2 from "../../Images/screenshotproject2.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-white text-center">My Projects</h1>
          <div className="row-12">
            <div className="card-deck">
              <div className="card mt-3">
                <a href="https://m1cha3lnava.github.io/gt-freezER/">
                  <img
                    className="card-img-bottom"
                    src={Project1}
                    alt="Project 1"
                  />
                </a>
                <br />
                <div className="card-title text-center">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-freezER"
                      className="text-dark"
                    >
                      FreezER
                    </a>
                  </h3>
                </div>
              </div>

              <div className="card mt-3 ">
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img
                    className="card-img-top"
                    src={Project1}
                    alt="Fitness Tracker"
                  />
                </a>
                <br />
                <div className="card-title text-center">
                  <h3>
                    <a
                      href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4"
                      className="text-dark"
                    >
                      Fitness Tracker
                    </a>
                  </h3>
                </div>
              </div>
              <div className="card mt-3">
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img
                    className="card-img-top"
                    src={Project2}
                    alt="Project 2"
                  />
                </a>
                <br />
                <div>
                  <div className="card-title text-center">
                    <h3>
                      <a
                        href="https://github.com/m1cha3lnava/gt-fitness-tracker"
                        className="text-dark"
                      >
                        Project 2
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-12 mt">
            <div className="card-deck">
              <div className="card mt-3 ">
                <a href="https://fierce-bastion-03895.herokuapp.com/notes">
                  <img
                    className="card-img-top"
                    src={Project1}
                    alt="Note Taker"
                  />
                </a>
                <br />
                <div className="card-title text-center">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/express-note-taker"
                      className="text-dark"
                    >
                      Note Taker
                    </a>
                  </h3>
                </div>
              </div>
              <div className="card mt-3 ">
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img
                    className="card-img-top"
                    src={Project2}
                    alt="Employee Tracker"
                  />
                </a>
                <br />
                <div className="card-title text-center">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-fitness-tracker"
                      className="text-dark"
                    >
                      Employee Tracker
                    </a>
                  </h3>
                </div>
              </div>
              <div className="card mt-3 ">
                <a href="https://nameless-garden-38105.herokuapp.com/">
                  <img
                    className="card-img-top"
                    src={Project2}
                    alt="Budget Tracker"
                  />
                </a>
                <br />
                <div className="card-title text-center">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-budget-tracker"
                      className="text-dark"
                    >
                      Budget Tracker
                    </a>
                  </h3>
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

export default Projects;
