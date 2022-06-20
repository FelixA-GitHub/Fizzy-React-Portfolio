import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';

function Project({ project }) {
    const { name, description, link, repo } = project;

    return (
        <div className="container-fluid">
            <div className="row my-2">
                {/* <div className="card project flex-row px-4 my-5" key={name}>
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

            </div> */}
                <div className="card p-0" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={require(`../../assets/portfolio/${name}.jpg`)}
                        alt={removeHyphens(name) && capitalizeFirstLetter(name)} />
                    <div className="card-img-overlay example">
                        <div className="card-body content">
                            <p className="card-text">{description}</p>
                            <a href={link}>{removeHyphens(name) && capitalizeFirstLetter(name)}</a>
                            <div>
                                <a href={repo}>
                                    <i className="fab fa-github"> Repo</i>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Project;