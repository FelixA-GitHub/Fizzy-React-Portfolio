import React, { useState } from 'react';
import coverImage from '../../assets/cover/clouds.jpg';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [pages] = useState([
        {
            name: "Felix Acevedo",
            description: 'Full Stack Engineer' 
        }
    ]);
    const [currentPage] = useState(pages[0]);
    
    return (
        <section className="about-example">
          
            <div className="card border-0">
              <img className="card-img-top vh-100" src={coverImage} alt="light bulb"></img>
              <div className="card-img-overlay card-inverse">
                <h1 className="text-center about-title mt-5" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
                {/* <img className="avatar-img" src={avatar} alt="avatar"></img> */}
                <div>            
                  <p className="about-desc about-text">{currentPage.description}</p>
                </div>
              </div>
            </div>
        </section>
      
      );
    }



export default Home;

