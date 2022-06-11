import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {

        }
    ])
    
    return (
        <section className='my-5'>
           <div onClick="">
                <div >
                    <h3>Data Mammoth</h3>
                    <img src={portfolioImage} width="300" height="200" alt="Data Mammoth Screenshot"/>
                    <h5>JavaScript/HTML</h5>
                </div>
                
                <div >
                </div>
                
            </div> 
        </section>
    )
};

export default Portfolio;