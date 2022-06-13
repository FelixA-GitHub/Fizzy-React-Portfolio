import React, { useState } from 'react';
import Project from '../Project';

//Portfolio function holds all the Projects to be presented to the viewer
function Portfolio() {

    const [projects] = useState([
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
        {
            name: '',
            description: '',
            link: '',
            repo: ''
        },
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