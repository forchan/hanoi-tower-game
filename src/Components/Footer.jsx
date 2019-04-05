import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar className="app-footer">
      <NavbarBrand />
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="https://github.com/forchan/hanoi-tower-game" target="_blank">
            <span style={{ color: 'white' }}>
              made by @chrischan on
            </span>
            {' '}
            <span>
              GitHub
            </span>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
