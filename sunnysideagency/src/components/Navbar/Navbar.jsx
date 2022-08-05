import React from 'react';

import Logo from '../../images/logo.svg';
import HamburgerMenu from "../../images/icon-hamburger.svg";
import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes.navItems}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className={classes.contact}>Contact</li>
        </ul>
      </div>
      <div className={classes.burgerMenu}>
        <span>
          <img src={HamburgerMenu} alt="Hamburger"/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
