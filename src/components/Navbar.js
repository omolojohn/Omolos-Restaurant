import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {

    return (
        <nav>
            <ul className='horizontal-menu'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/order'}>Order</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
