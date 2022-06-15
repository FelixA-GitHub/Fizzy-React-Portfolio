import React from 'react';

function Header(props) {

    return (
        <header className=''>
            <h1>Felix Acevedo</h1>
            {props.children}
        </header>
    );
};

export default Header;