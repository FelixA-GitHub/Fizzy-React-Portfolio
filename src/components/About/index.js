import React, { useState } from "react";
import coverImage from '../../assets/cover/cover-image.jpg';
import { capitalizeFirstLetter } from "../../utils/helpers"

function About() {

  const [pages] = useState([
    {
      name: "about me",
      description: 'I am a Full Stack Web Developer leveraging a Physical Therapy background to build intuitive and responsive web experiences for all users.'

    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <section class="">
      <div class="">
        <div class="card border-0">
          <img class="card-img-top" src={coverImage} alt="light bulb"></img>
          <div class="card-img-overlay card-inverse">
            <h1 class="" style={{ fontSize: "64px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            <div>            
              <p class="about-desc">{currentPage.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;