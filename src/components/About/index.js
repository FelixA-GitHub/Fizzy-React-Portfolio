import React, { useState } from "react";
import avatar from '../../assets/avatar/avatar.jpg'
import { capitalizeFirstLetter } from "../../utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";


function About() {

  const [pages] = useState([
    {
      name: "about me",
      description: 'I am a Full Stack Web Developer leveraging a Physical Therapy background to build intuitive and responsive web experiences for all users. Skills in HTML, CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object Oriented Programming, Express.js, SQL, NoSQL, Model-View-Controllers, Object-Relational Mapping, Progressive Web Applications, and React were sharpened at the UNCC-Coding Bootcamp, as well as Coursera and Treehouse. Through previous experience as a Physical Therapist over the course of 14 years, I have gained critical thinking skills, the ability to think outside the box, the ability to view problems from different angles, and a passion for learning and staying up-to-date with trends and advancements. Combined with an artistic eye and experience in creating art through Photoshop and with paint and canvas, I look to develop applications that are equally attractive on the front end and back end.'

    }
  ]);

  const [currentPage] = useState(pages[0]);

  //   return (
  //     <section className="about-example bg-resume">

  //       <div className="card border-0">
  //         <div className="">

  //           {/* <img className="card-img-top vh-100" src={coverImage} alt="light bulb"></img> */}
  //           <div className="card-img-overlay card-inverse about-content scroll-text">
  //             <h1 className="about-title" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
  //             <img className="avatar-img" src={avatar} alt="avatar"></img>
  //             <div>
  //               <p className="about-desc about-text">{currentPage.description}</p>
  //             </div>
  //           </div>
  //         </div>

  //       </div>
  //     </section>

  //   );
  // }

  return (
    <section className='bg-resume vh-100'>
      <div className='container'>
        <div className='row'>
          <div className=''>
            <h1 className="" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            <p>
              {currentPage.description}
            </p>
            <hr />
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;