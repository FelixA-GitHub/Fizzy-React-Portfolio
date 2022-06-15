import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"

function About() {

  const [pages] = useState([
    {
      name: "about me"
    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <section className="my-5">
      <div className="">
        <div className="">
          <h1 className="" style={{ fontSize: "84px" }}>{ capitalizeFirstLetter(currentPage.name) }</h1>
        </div>
        <p>
          I am a Full Stack Developer and Fitness Junkie
        </p>
        <p>
          The contents of this area to be determined
        </p>
      </div>
    </section>
  );
}

export default About;