import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css'

function Navbar() {

    return (
        <nav>
            <ul className='navbar'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/order'}>Order</NavLink></li>
            </ul>
        </nav>
    );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> acf12b5 (changes)
