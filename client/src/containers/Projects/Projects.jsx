import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Project1 } from "../../Images/screenshot-project-1.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-white text-center">My Projects</h1>
          <div className="row">
          <div className="card-deck">
            <div className="card md">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-freezER"
                      class="text-dark"
                    >
                      FreezER
                    </a>
                  </h3>
                </div>
                <a href="https://m1cha3lnava.github.io/gt-freezER/">
                  <img className="m-3" src={Project1} alt="Project 1" />
                </a>
              </div>
            </div>
            <div className="card md">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-fitness-tracker"
                      class="text-dark"
                    >
                      Fitness Tracker
                    </a>
                  </h3>
                </div>
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img className="m-3" src="" alt="Fitness Tracker" />
                </a>
              </div>
            </div>
            <div className="card md">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-fitness-tracker"
                      class="text-dark"
                    >
                      Project 2
                    </a>
                  </h3>
                </div>
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img className="m-3" src="" alt="Project 2" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/express-note-taker"
                      class="text-dark"
                    >
                      Note Taker
                    </a>
                  </h3>
                </div>
                <a href="https://fierce-bastion-03895.herokuapp.com/notes">
                  <img className="m-3" src="" alt="Note Taker" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-fitness-tracker"
                      class="text-dark"
                    >
                      Employee Tracker
                    </a>
                  </h3>
                </div>
                <a href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4">
                  <img className="m-3" src="" alt="Employee Tracker" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="card-title">
                  <h3>
                    <a
                      href="https://github.com/m1cha3lnava/gt-budget-tracker"
                      class="text-dark"
                    >
                      Budget Tracker
                    </a>
                  </h3>
                </div>
                <a href="https://nameless-garden-38105.herokuapp.com/">
                  <img className="m-3" src="" alt="Budget Tracker" />
                </a>
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
