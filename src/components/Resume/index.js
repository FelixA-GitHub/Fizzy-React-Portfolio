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
                        <h3>Front-End and Back-End Proficiencies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Web APIs</li>
                                <li>Third-Party APIs</li>
                                <li>Server-Side APIs</li>
                                <li>Node.js</li>
                                <li>Object Oriented Programming</li>
                                <li>Express.js</li>
                                <li>SQL</li>
                                <li>NoSQL</li>
                                <li>Model-View-Controllers</li>
                                <li>Object-Relational Mapping</li>
                                <li>Progressive Web Applications</li>
                                <li>React</li>
                            </ul>
                    </div>

                </div>

            </div>
        </section>
   )
};



export default Resume;

