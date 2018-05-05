import React from 'react';
import LoginButton from '../loginButton/loginButton';

const Nav = () => (
  <nav className="header__nav">
    <button className="button">About Us</button>
    <LoginButton />
    <button className="button register-button">Register</button>
  </nav>
);

export default Nav;
