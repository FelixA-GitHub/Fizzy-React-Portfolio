import React from "react";

function Footer() {

    //social media icons and corresponding links
    const icons = [
        {
            name: "",
            link: ""
        },
        {
            name: "",
            link: ""
        },
        {
            name: "",
            link: ""
        }

    ]

    return (
        <footer className="">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                        <i className={icon.name}></i>
                    </a>
                )
            )}
        </footer>
    );
};

export default Footer;