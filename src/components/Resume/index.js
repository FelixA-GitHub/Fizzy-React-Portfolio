import React, { useState } from 'react';
import resume from '../../assets/resume/FullStackDeveloperResume.pdf';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume() {
   const [pages] = useState([
    {
        name: "resume"
    }
   ]);
   const [currentPage] = useState(pages[0]);
   return (
        <section className=''>
            <div className='container'>
                <div className='row'>
                    <div className=''>
                        <h1 className=''>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <h3>Skils</h3>
                            <ul>
                                <li></li>
                                HTML, CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object Oriented Programming, Express.js, SQL, NoSQL, Model-View-Controllers, Object-Relational Mapping, Progressive Web Applications, and React
                            </ul>
                    </div>

                </div>

            </div>
        </section>
   )
};



export default Resume;

