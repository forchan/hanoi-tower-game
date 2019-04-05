import React, { Fragment, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import logo from '../styles/logo.svg';

const Header = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const buttonStyle = { position: 'absolute', top: '15px', right: '15px' };
  const externalCloseBtn = <button className="close" style={buttonStyle} onClick={toggleModal}>&times;</button>;

  return (
    <Fragment>
      <Navbar className="app-header">
        <NavbarBrand>
          <img
            src={logo}
            className="app-logo"
            alt="React logo"
          />
          <span style={{ color: 'white' }}>
            Towers of Hanoi
          </span>
        </NavbarBrand>
        <Button color="info" onClick={toggleModal}>
          Instructions
        </Button>
      </Navbar>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        fade={false}
        centered
        external={externalCloseBtn}
      >
        <ModalHeader>Instructions</ModalHeader>
        <ModalBody>
          <h6>
            The goal of the game is to move all disks from the left most tower
            to the right most tower with following rules:
          </h6>
          <ul>
            <li>you can only move one disk at a time by dragging it</li>
            <li>you can not move a disk that has another disk on top of it</li>
            <li>a larger disk may not be placed on a smaller disk</li>
          </ul>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default Header;
