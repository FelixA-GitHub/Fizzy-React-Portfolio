import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
      <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className="my-2">
          <p>
          Full Stack Web Developer leveraging a Physical Therapy background to build intuitive and responsive web experiences for all users. Skills in HTML, CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object Oriented Programming, Express.js, SQL, NoSQL, Model-View-Controllers, Object-Relational Mapping, Progressive Web Applications, and React were sharpened at the UNCC-Coding Bootcamp, as well as Coursera and Treehouse. Through previous experience as a Physical Therapist over the course of 14 years, I have gained critical thinking skills, the ability to think outside the box, the ability to view problems from different angles, the ability to collaborate and contribute in a team setting, and a passion for learning and staying up-to-date with trends and advancements. Combined with an artistic eye and experience in creating art through Photoshop and with paint and canvas, I develop applications that are equally attractive on the front end and back end.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;