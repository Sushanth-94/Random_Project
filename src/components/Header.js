import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <NavLink to="/" className="header-main">Park your Car</NavLink>
    <NavLink to="/login" className="btn btn-white">Login</NavLink>
    <NavLink to="/register" className="btn btn-white">Sign up</NavLink>
  </header>
);

export default Header;
