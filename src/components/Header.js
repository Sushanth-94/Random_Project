import React from 'react';
import {NavLink} from 'react-router-dom'
//import '../styles/header.css';

const Header = () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink to="/" className="navbar-brand">ParkEasy</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Header;
