import React from 'react';
import FyloLogo from '../../img/logo.svg';

const NavbarLogo = () => {
  return (
    <React.Fragment>
      <img src={FyloLogo} alt="Fylo Logo" style={{ width: '100px' }} />
    </React.Fragment>
  );
};

export default NavbarLogo;
