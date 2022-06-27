import React, { useState } from "react";
import coverImage from '../../assets/cover/cover-image.jpg';
import avatar from '../../assets/avatar/avatar.jpg'
import { capitalizeFirstLetter } from "../../utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

function About() {

  const [pages] = useState([
    {
      name: "about me",
      description: 'I am a Full Stack Web Developer leveraging a Physical Therapy background to build intuitive and responsive web experiences for all users. Skills in HTML, CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object Oriented Programming, Express.js, SQL, NoSQL, Model-View-Controllers, Object-Relational Mapping, Progressive Web Applications, and React were sharpened at the UNCC-Coding Bootcamp, as well as Coursera and Treehouse. Through previous experience as a Physical Therapist over the course of 14 years, I have gained critical thinking skills, the ability to think outside the box, the ability to view problems from different angles, and a passion for learning and staying up-to-date with trends and advancements. Combined with an artistic eye and experience in creating art through Photoshop and with paint and canvas, I look to develop applications that are equally attractive on the front end and back end.'

    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <section className="about-example">
      
        <div className="card border-0">
          <img className="card-img-top vh-100" src={coverImage} alt="light bulb"></img>
          <div className="card-img-overlay card-inverse about-content scroll-text">
            <h1 className="about-title" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            <img className="avatar-img" src={avatar} alt="avatar"></img>
            <div>            
              <p className="about-desc about-text">{currentPage.description}</p>
            </div>
          </div>
        </div>
    </section>
  
    // <Container>
    //   <Row>
    //     <Col></Col>
    //     <Col></Col>
    //   </Row>
    // </Container>
  );
}

export default About;