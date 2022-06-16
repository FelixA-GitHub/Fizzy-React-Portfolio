import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";

function Project({project}) {
    const { name, description, link, repo } = project;

    return (
        <div className="project flex-row px-4 my-5" key={name}>
            <img width="500px" height="375px"
                src={require(`../../assets/projects/${name}.jpg`)}
                alt={removeHyphens(name) && capitalizeFirstLetter(name)}
                className="project-bg"
            />
            <div className="project-text">
                <p>{description}</p>
                <h3>
                    <a href={link}>{removeHyphens(name) && capitalizeFirstLetter(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
            </div>
            
        </div>
    );
};

export default Project;