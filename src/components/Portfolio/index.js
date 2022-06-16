import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';
import { Row, Container, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Portfolio function holds all the Projects to be presented to the viewer
function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio",
            description: 'Links to my latest work'
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
        <Container>
            <p className="" style={{ fontSize: "28px" }}>
                {currentPage.description}
            </p>
            <Row className='flex-row'>
                <Col sm={7}>
                    {/* <Image
                    src=""
                    fluid
                    /> */}
                </Col>
                <Col sm={5}>
                {projects.map((project, i) => (
                    <Project 
                        project={project}
                        key={"project" + i}
                    />
                ))}
                </Col>
            </Row>
            {/* <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row> */}
        </Container>
        // <div>
        //     <h1 className="" style={{ fontSize: "64px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
        //     <p>
        //         {currentPage.description}
        //     </p>
        //     <div className='flex-row px-4 my-5'>
        //         {projects.map((project, i) => (
        //             <Project
        //                 project={project}
        //                 key={"project" + i}
        //             />
        //         ))}
        //     </div>

        // </div>
    );
};

export default Portfolio;