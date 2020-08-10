import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Project1 from "../../Images/screenshot-project-1.png";
import Project2 from "../../Images/screenshotproject2.png";
import ProjectCard from "../../components/ProjectCard";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-white text-center">My Projects</h1>
          <div className="row-12">
            <div className="card-deck">
              <ProjectCard
                href="https://m1cha3lnava.github.io/gt-freezER/"
                src={Project1}
                alt="FreezER"
                text="FreezER"
              ></ProjectCard>
              <ProjectCard
                href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4"
                src={Project2}
                alt="Project 2"
                text="Project 2"
              ></ProjectCard>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
