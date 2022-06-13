import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({project}) {
    const { name, description, link, repo } = project;

    return (
        <div className="project" key={name}>
            <img
                src={require(`../../assets/projects/${name}.jpg`)}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            />
            <div className="project-text">
                <p>{description}</p>
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
            </div>
            
        </div>
    );
};

export default Project;