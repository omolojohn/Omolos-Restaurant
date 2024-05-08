import React from "react";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div
      class="shadow p-1 mb-3 bg-body-tertiary rounded border-bottom border-black"
      style={{ backgroundColor: "black"}}
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{padding:"25px 20px"}}>
        <div class="container-fluid">
          <NavLink
            class="navbar-brand"
            to="https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works"
            style={{ textDecoration: "none" , fontSize:"30px",color:"#a6b49a"}}
          >
            OMOLO'S RESTAURANT
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" style={{ marginLeft: "600px", gap: "30px" }}>
              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ textDecoration: "none",color:"#a6b49a", fontSize:"20px"}}
                >
                  HOME
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  id="nav-item"
                  to="/menu"
                  style={{ textDecoration: "none" ,color:"#a6b49a",fontSize:"20px"}}
                >
                  MENU
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  id="nav-item"
                  to="/features"
                  style={{ textDecoration: "none" ,color:"#a6b49a",fontSize:"20px"}}
                >
                  PRODUCT
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  id="nav-item"
                  to="/about"
                  style={{ textDecoration: "none" ,color:"#a6b49a",fontSize:"20px"}}
                >
                  ABOUT
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  id="nav-item"
                  to="/career"
                  style={{ textDecoration: "none" ,color:"#a6b49a",fontSize:"20px" }}
                >
                  CAREER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
export default Navbar;