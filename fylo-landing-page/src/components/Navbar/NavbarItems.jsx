import React from 'react';

const NavbarItems = () => {
  return (
    <React.Fragment>
      <ul className="list-none flex gap-5">
        <li className="hover:cursor-pointer">Features</li>
        <li className="hover:cursor-pointer">Team</li>
        <li className="hover:cursor-pointer">Sign In</li>
      </ul>
    </React.Fragment>
  );
};

export default NavbarItems;
