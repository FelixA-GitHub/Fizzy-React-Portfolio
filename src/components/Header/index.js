import React from 'react';

function Header(props) {

    return (
        <header className='sticky-top'>
            {props.children}
        </header>
    );
};

export default Header;