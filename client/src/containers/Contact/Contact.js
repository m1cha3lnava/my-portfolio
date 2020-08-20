import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Linkedin from "../../Images/Linkedin-profile.png";
import ContactCard from "../../components/ContactCard";
import PersonalCard from "../../components/PersonalCard";

//client\src\

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-center text-white">Contact Me</h1>
          <div className="row-12 mt-3">
            <div className="card-deck">
              <PersonalCard />
              <ContactCard imageLink={Linkedin} href="https://www.linkedin.com/in/michael-nava-34783744/" text = "Linkedin"/>
              <ContactCard imageLink={"https://github.blog/wp-content/uploads/2019/03/company-twitter.png?fit=1201%2C630"} href="https://github.com/m1cha3lnava" text="Github" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
