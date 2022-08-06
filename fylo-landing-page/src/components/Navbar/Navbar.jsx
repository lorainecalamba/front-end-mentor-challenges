import React from 'react';
import NavbarItems from './NavbarItems';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center px-14">
      <NavbarLogo />
      <NavbarItems />
    </div>
  );
};

export default Navbar;
