import React from 'react';
import './App.css';
import Menu from './Menu'

function Navbar() {
    return (
        <nav>
            <ul className='horizontal-menu'>
                <li>Home</li>
                <li>Our Menu</li>
                <li>Order</li>
               
            </ul>
        </nav>
    );
}

export default Navbar;