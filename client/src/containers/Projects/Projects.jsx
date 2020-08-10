import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import Project1 from "../../Images/screenshot-project-1.png";
import Project2 from "../../Images/screenshotproject2.png";
import FitnessTracker from "../../Images/fitness-tracker.png";
import NoteTaker from "../../Images/note-taker.png";
import BudgetTracker from "../../Images/budget-tracker.png";
import ReactEmp from "../../Images/react-random-emp.png";
import NodeEmp from "../../Images/node-emp.png";
import EmpTracker from "../../Images/emp-management.png";

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
                text="FreezER"
                href="https://m1cha3lnava.github.io/gt-freezER/"
                src={Project1}
              ></ProjectCard>
              <ProjectCard
                text="CreativeMeet"
                href="https://radiant-spire-56655.herokuapp.com/?id=5f1f4768e60afd0017db99f4"
                src={Project2}
              ></ProjectCard>
            </div>
            <div className="card-deck">
              <ProjectCard
                text="Fitness Tracker"
                href="https://m1cha3lnava.github.io/gt-freezER/"
                src={FitnessTracker}
              ></ProjectCard>
              <ProjectCard
                text="Budget Tracker"
                href="https://nameless-garden-38105.herokuapp.com/"
                src={BudgetTracker}
              ></ProjectCard>
              <ProjectCard
                text="Employee Tracker (React)"
                href="https://m1cha3lnava.github.io/react-employee-tracker/"
                src={ReactEmp}
              ></ProjectCard>
            </div>
            <div className="card-deck">
              <ProjectCard
                text="Note Taker"
                href="https://fierce-bastion-03895.herokuapp.com/notes"
                src={NoteTaker}
              ></ProjectCard>
              <ProjectCard
                text="Content Management System"
                href="https://github.com/m1cha3lnava/gt-employee-tracker"
                src={NodeEmp}
              ></ProjectCard>
              <ProjectCard
                text="Employee Summary"
                href="https://github.com/m1cha3lnava/gt-oop-employee-summary"
                src={EmpTracker}
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
