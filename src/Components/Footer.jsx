import React from 'react';
import githubMark from '../styles/GitHub_Mark.png';
import githubLogo from '../styles/GitHub_Logo.png';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar className="app-footer">
      <NavbarBrand />
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            className="github-link"
            href="https://github.com/forchan/hanoi-tower-game"
            target="_blank"
          >
            made by chrischan on{' '}
            <img src={githubMark} alt="GitHub mark" style={{ height: '22px'}} />
            <img src={githubLogo} alt="GitHub logo" style={{ height: '22px'}} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
