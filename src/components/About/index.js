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
    <section className="my-5">
      <div className="">
        <div className="">
          <h1 className="" style={{ fontSize: "64px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
          <p>
            {currentPage.description}
          </p>
        </div>
        <img src={coverImage} alt="light bulb"></img>

        <p>
          The contents of this area to be determined
        </p>
      </div>
    </section>
  );
}

export default About;