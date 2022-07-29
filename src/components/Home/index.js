import React, { useState } from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [pages] = useState([
        {
            name: "home",
            description: 'TBD' 
        }
    ]);
    const [currentPage] = useState(pages[0]);
    
    return (
        <section className="about-example">
          
            <div className="card border-0">
              <img className="card-img-top vh-100" src={coverImage} alt="light bulb"></img>
              <div className="card-img-overlay card-inverse about-content scroll-text">
                <h1 className="about-title" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
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

