import React from 'react';
import './App.css';

function Navbar() {
    return (
        <nav>
            <ul className='horizontal-menu'>
                <li>Home</li>
                <li>Menu</li>
                <li>Make order</li>
            </ul>
        </nav>
    );
}

export default Navbar;