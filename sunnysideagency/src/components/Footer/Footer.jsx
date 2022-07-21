import React from 'react';

import LogoFooter from '../../images/logo.svg';
import FacebookIcon from '../../images/icon-facebook.svg';
import InstragramIcon from '../../images/icon-instagram.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import TwitterIcon from '../../images/icon-twitter.svg';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={LogoFooter} className={classes.footerLogo} alt="Footer Logo" />
      <div>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className={classes.footerSocial}>
        <img src={FacebookIcon} alt="Facebook" />
        <img src={InstragramIcon} alt="Instragram" />
        <img src={TwitterIcon} alt="Twitter" />
        <img src={PinterestIcon} alt="Pinterest" />
      </div>
    </div>
  );
};

export default Footer;
