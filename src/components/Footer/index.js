import React from "react";

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
            <footer className="container">
                <div className="row">
                    {icons.map(icon =>
                    (
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                            <i className={icon.name} fa-bounce></i>
                        </a>
                    )
                    )}
                </div>

            </footer>
        </section>
    );
};

export default Footer;