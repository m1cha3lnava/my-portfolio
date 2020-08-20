import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfilePic from "../../Images/Profilepicture.jpg";

class Home extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <h1 className="text-center text-white mt">Michael Nava</h1>
        <div className="container bg-white">
          <div className="row">
            <div className="col-lg">
              <img src={ProfilePic} className="profilePic" alt="Profile" />
            </div>
            <div className="col-sm-9 mt-3">
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
          <div className="row">
            <p>
              Me llamo Michael Nava. Nací en California y crecí en el norte de
              Alabama, donde me gradué de Austin High School. Estuve activo en
              JROTC los 4 años y jugué fútbol universitario en mi primer año y
              luego corrí atletismo y campo a través en mi segundo, tercer y
              cuarto año. Asistí a la Academia Militar de los Estados Unidos en
              West Point durante mi primer año, luego asistí a Calhoun Community
              College y finalmente a la Universidad de Alabama en Huntsville. Me
              dediqué a los campos de los sistemas de información informática,
              la informática y la ingeniería industrial. Mi último trabajo fue
              Controlman en General Electric Appliances, donde se me asignó la
              tarea de minimizar el tiempo de inactividad, realicé mantenimiento
              de nivel 1 y mantenimiento preventivo para varios departamentos.
              Aproveché la oportunidad de inscribirme en el campo de
              entrenamiento de codificación de Georgia Tech para convertirme en
              un empleador competitivo en la industria tecnológica.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
