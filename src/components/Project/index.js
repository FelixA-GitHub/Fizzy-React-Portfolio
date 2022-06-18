import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";

function Project({ project }) {
    const { name, description, link, repo } = project;

    return (
        <div className="">
            <div className="project flex-row px-4 my-5" key={name}>
                <img
                    src={require(`../../assets/portfolio/${name}.jpg`)}
                    alt={removeHyphens(name) && capitalizeFirstLetter(name)}
                    className="img-fluid"
                />
                <div className="project-text">
                    <div>
                        <p>{description}</p>
                        <a href={link}>{removeHyphens(name) && capitalizeFirstLetter(name)}</a>
                        <br/>
                        <a href={repo}>
                            <i className="fab fa-github"> Repo</i>
                        </a>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default Project;