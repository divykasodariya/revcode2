import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='item'><a href="/">Home</a></li>
                <li className='item'><a href="/about">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
