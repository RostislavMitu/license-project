import React from 'react';
import Nav from './nav';

const Header  = () => (
  <header className="header">
    <div className="logo"><img src='logo.png'></img></div>
    <a className='logo-name'>Real Estate Rental</a>
    <Nav />
  </header>
);

export default Header;



