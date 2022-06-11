import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

    return (
        <header className=''>
            <h1>Felix Acevedo</h1>
            <img src={coverImage} alt="light bulb"></img>
            {props.children}
        </header>
    );
};

export default Header;