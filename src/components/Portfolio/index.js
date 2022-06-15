import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';

//Portfolio function holds all the Projects to be presented to the viewer
function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    const [projects] = useState([
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: 'https://felixa-github.github.io/run-buddy/',
            repo: 'https://github.com/FelixA-GitHub/run-buddy.git'
        },
        {
            name: 'data-mammoth',
            description: 'JavaScript/HTML',
            link: 'https://felixa-github.github.io/Data-Mammoth/',
            repo: 'https://github.com/FelixA-GitHub/Data-Mammoth.git'
        },
        {
            name: 'regalcare',
            description: 'JavaScript/Handlebars/MySQL',
            link: 'https://github.com/FelixA-GitHub/grasshopper-travel.git',
            repo: 'https://github.com/FelixA-GitHub/grasshopper-travel.git'
        },
        {
            name: 'construction1',
            description: 'TBD',
            link: 'https://github.com/FelixA-GitHub',
            repo: 'https://github.com/FelixA-GitHub'
        },
        {
            name: 'construction2',
            description: 'TBD',
            link: 'https://github.com/FelixA-GitHub',
            repo: 'https://github.com/FelixA-GitHub'
        },
        {
            name: 'construction3',
            description: 'TBD',
            link: 'https://github.com/FelixA-GitHub',
            repo: 'https://github.com/FelixA-GitHub'
        },
    ])

    return (
        <div>
            <h1 style={{ fontSize: "84px" }}>{ capitalizeFirstLetter(currentPage.name) }</h1>
            <div className='flex-row'>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        key={"project" + i}
                    />
                ))}
            </div>

        </div>
    );
};

export default Portfolio;