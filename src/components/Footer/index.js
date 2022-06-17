import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {

    //social media icons and corresponding links
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/FelixA-GitHub"
        },
        {
            name: "fab fa-linkedIn",
            link: "https://www.linkedin.com/in/felix-acevedo-b7596520a/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/17420314/felix"
        }

    ]

    return (
        <section>
            <footer class="py-5 bg-danger">
                <Container>
                    <div class="row">
                        <div class="col-lg-8">
                          {icons.map(icon =>
                        (
                            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                                <i class={icon.name} fa-bounce></i>
                            </a>
                        )
                        )}  
                        </div> 
                    </div>
                </Container>
            </footer>
        </section>
    );
};

export default Footer;