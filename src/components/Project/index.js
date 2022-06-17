import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";

function Project({project}) {
    const { name, description, link, repo } = project;

    return (
        <div className="project flex-row px-4 my-5" key={name}>
            <img
                src={require(`../../assets/projects/${name}.jpg`)}
                alt={removeHyphens(name) && capitalizeFirstLetter(name)}
                className="project-bg"
            />
            <div className="project-text">
                <div>
                    <a href={link}>{removeHyphens(name) && capitalizeFirstLetter(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                    <p>{description}</p>  
                </div>
                
                
            </div>
            
        </div>
    );
};

export default Project;