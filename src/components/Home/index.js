import React, { useState } from 'react';
import coverImage from '../../assets/cover/clouds.jpg';
import black from '../../assets/cover/black.jpg';
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
      // <section className="about-example">

      //     <div className="card border-0">
      //       <img className="card-img-top vh-100" src={coverImage} alt="clouds"></img>
      //       <div className="card-img-overlay card-inverse">
      //         <h1 className="text-center about-title mt-5" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
      //         <div>            
      //           <p className="about-desc about-text">{currentPage.description}</p>
      //         </div>
      //       </div>
      //     </div>
      // </section>

    <section className='cf vh-100'>
      <div className='container'>
        <div>
          <img className='bottom vw-100' src={coverImage} alt="clouds"></img>
          <img className='top vw-100' src={black} alt="black"></img>
        <div className='overlay'>
          <div className='text-center'>
            <h1 className="text-center mt-5" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            <p className="text-center mt-5" style={{ fontSize: "23px" }}>
              {currentPage.description}
            </p>
          </div>

        </div>
        </div>

      </div>
    </section>

  );

}

// window.addEventListener("click", ev => {
    
//     document.body.innerHTML = "<h1 id='gameOn'>Portfolio!!!</h1>"
  
// });

// document.getElementByID("redirectBtn").addEventListener("click", redirectFunction);
//    function redirectFunction() {
//       window.location.href("https://google.com/");
//    }



export default Home;

