import React from "react";
import { NavLink, useLocation } from "react-router-dom";
function Navbar () {
    const location = useLocation();

    if (location.pathname === "/") {
        return null;
    }
    return (
        <div 
        class="shadow p-1 mb-3 bg"
        >

        </div>
    )
}