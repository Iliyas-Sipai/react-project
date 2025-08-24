import React from "react";
import { Link } from "react-router-dom";
const NavbarCompo = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid d-flex justify-content-between">
            <ul className="navbar-nav d-flex justify-content-between align-items-start mb-20">
              <Link to="/"><li className="nav-link active"><a href="#">Home</a></li></Link>
              <Link to="/login"><li className="nav-link"><a href="#">Login</a></li></Link>
              <Link to="/profile"><li className="nav-link"><a href="#">Profile</a></li></Link>
              <Link to="/profile"><li className="nav-link"><a href="#">Logout</a></li></Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavbarCompo;
