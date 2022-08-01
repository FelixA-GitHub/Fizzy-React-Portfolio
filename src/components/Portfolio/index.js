import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

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
            name: 'regal-care',
            description: 'JavaScript/Handlebars/MySQL',
            link: 'https://regal-care-inc.herokuapp.com/',
            repo: 'https://github.com/FelixA-GitHub/grasshopper-travel.git'
        },
        {
            name: 'tech-blog',
            description: 'JavaScript/Handlebars/CSS',
            link: 'https://quiet-refuge-09071.herokuapp.com/homepage',
            repo: 'https://github.com/FelixA-GitHub/Fizzy-Tech-Blog.git'
        },
        {
            name: 'e-commerce',
            description: 'MySQL/Sequelize/Express',
            link: 'https://watch.screencastify.com/v/IHmJwKGaOrKkWfO4aNBF',
            repo: 'https://github.com/FelixA-GitHub/Fizz-E-Commerce-Back-End.git'
        },
        {
            name: 'grandmas-taxidermy',
            description: 'MERN/Heroku',
            link: 'https://infinite-falls-54621.herokuapp.com/',
            repo: 'https://github.com/FelixA-GitHub/Grandmas-Mismatched-Taxidermy.git'
        }
    ])

    return (
        // <section className='bg-portfolio container-fluid'>
        //     <div className="row d-flex">
        //         <h1 className="" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
        //         <p className="" style={{ fontSize: "20px" }}>
        //             {currentPage.description}
        //         </p>

        //         <Row className='d-flex row py-4'>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example' >
        //                     <Card.Img variant="top" src={runbuddy} className="" />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[0].name)}</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             A website that offers Fitness Training Services.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/run-buddy/"  >App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/run-buddy.git" >GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example'>
        //                     <Card.Img variant="top" src={datamammoth} />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[1].name)}</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[1].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             A simple search engine for movies, with a favorites list.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/Data-Mammoth/">App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/Data-Mammoth.git">GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>

        //         </Row>

        //         <Row className='flex-row  py-4'>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example'>
        //                     <Card.Img variant="top" src={regalcare} />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>{capitalizeFirstLetter(projects[2].name)}</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[2].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             A website dedicated to traveling medical professionals.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://felixa-github.github.io/grasshopper-travel/">App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub/grasshopper-travel.git">GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example'>
        //                     <Card.Img variant="top" src={construction1} />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>Coming Soon</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[3].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             Coming soon. Project in production.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>
        //         </Row>

        //         <Row className='flex-row  py-4'>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example'>
        //                     <Card.Img variant="top" src={construction2} />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>Coming Soon</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             Coming soon. Project in production.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>
        //             <Col sm={6}>
        //                 <Card style={{ width: '32rem' }} border="dark" className='example'>
        //                     <Card.Img variant="top" src={construction3} />
        //                     <Card.ImgOverlay className='content'>
        //                         <Card.Title className='title-lg'>Coming Soon</Card.Title>
        //                         <Card.Subtitle className="text-muted subtitle-md">{projects[0].description}</Card.Subtitle>
        //                         <Card.Text className='card-desc-middle'>
        //                             Coming soon. Project in production.
        //                         </Card.Text>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">App Link</Card.Link>
        //                         <Card.Link className='card-link-bottom' href="https://github.com/FelixA-GitHub">GitHub Repo</Card.Link>
        //                     </Card.ImgOverlay>
        //                 </Card>
        //             </Col>
        //         </Row>
        //     </div>


        // </section>

        <section className="p-4 bg-all vw-100">
            <div>
                <Container fluid className="p-0">
                    <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                    <h3 className="text-center margin-top">{capitalizeFirstLetter(currentPage.description)}</h3>
                    <Row className=''>

                        {projects.map((project, idx) => (
                            <Col md={6}>
                                <Project
                                    project={project}
                                    key={"project" + idx}
                                />
                            </Col>
                        ))}
                    </Row>

                </Container>
            </div>

        </section>
    );
};

export default Portfolio;