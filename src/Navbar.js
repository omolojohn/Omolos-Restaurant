import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;