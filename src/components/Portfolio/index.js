import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';
import { Row, Container, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import runbuddy from '../../assets/projects/run-buddy.png'
import regalcare from '../../assets/projects/regalcare.png'
import datamammoth from '../../assets/projects/data-mammoth.png'
import construction1 from '../../assets/projects/construction1.png'
import construction2 from '../../assets/projects/construction2.jpg'
import construction3 from '../../assets/projects/construction3.jpg'

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
            <h1 className="" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            <p className="" style={{ fontSize: "20px" }}>
                {currentPage.description}
            </p>

            <Row className='d-flex row py-4'>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark"  className='example' >
                        <Card.Img variant="top" src={runbuddy} className="" />
                        <Card.ImgOverlay  className='content'>
                            <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[0].name)}</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                A website that offers Fitness Training Services.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/run-buddy/"  >App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/run-buddy.git" >GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark" className='example'>
                        <Card.Img variant="top" src={datamammoth} />
                        <Card.ImgOverlay  className='content'>
                            <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[1].name)}</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[1].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                A simple search engine for movies, with a favorites list.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/Data-Mammoth/">App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/Data-Mammoth.git">GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

            </Row>

            <Row className='flex-row  py-4'>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark" className='example'>
                        <Card.Img variant="top" src={regalcare} />
                        <Card.ImgOverlay className='content'>
                            <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[2].name)}</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[2].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                A website dedicated to traveling medical professionals.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/grasshopper-travel/">App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/grasshopper-travel.git">GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark" className='example'>
                        <Card.Img variant="top" src={construction1} />
                        <Card.ImgOverlay className='content'>
                            <Card.Title className='title-lg'>Coming Soon</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[3].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                Coming soon. Project in production.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Row className='flex-row  py-4'>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark" className='example'>
                        <Card.Img variant="top" src={construction2} />
                        <Card.ImgOverlay className='content'>
                            <Card.Title className='title-lg'>Coming Soon</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                Coming soon. Project in production.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ width: '32rem' }} border="dark" className='example'>
                        <Card.Img variant="top" src={construction3} />
                        <Card.ImgOverlay className='content'>
                            <Card.Title className='title-lg'>Coming Soon</Card.Title>
                            <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
                            <Card.Text className='card-desc-middle'>
                                Coming soon. Project in production.
                            </Card.Text>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
                            <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Portfolio;