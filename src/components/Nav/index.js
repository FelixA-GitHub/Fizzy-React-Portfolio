import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../PhotoList/utils/helpers';

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

      <nav>
        
      </nav>

  );
}

export default Nav;
