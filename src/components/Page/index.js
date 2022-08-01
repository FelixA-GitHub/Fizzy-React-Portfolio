//dependencies
import React, { useState } from "react";
import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import Home from "../Home";
import Carousel from 'react-bootstrap/Carousel';

function Page({ currentPage }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // const renderPage = () => {
    //     switch (currentPage.name) {
    //         case 'home':
    //             return <Home />;
    //         case 'about':
    //             return <About />;
    //         case 'portfolio':
    //             return <Portfolio />;
    //         case 'contact':
    //             return <Contact />;
    //         case 'resume':
    //             return <Resume />;
    //         default:
    //             return <Home />;
    //     }
    // };

    return (
        // <section>
        //     <PageContent>{renderPage()}</PageContent>
        // </section>
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Home />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Test1.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <About />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Test2.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Page;


