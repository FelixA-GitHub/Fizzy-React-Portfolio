import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <a className="navbar-brand" href="#home">Felix Acevedo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {pages.map((Page) => (
              <li
                className={`nav-item nav-link ${currentPage.name === Page.name && 'navActive'}`} key={Page.name}
              >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      
    </nav>
  );
}

export default Nav;
