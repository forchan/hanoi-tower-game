import React, { Fragment, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import logo from '../styles/logo.svg'; // I can use the React logo right?
import { HANOI_TOWER_GAME_NAME } from '../constants/GameConstants.js';

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
            {HANOI_TOWER_GAME_NAME}
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
            The goal of this game is to move all disks from the left most tower
            to the right most tower, while following these rules:
          </h6>
          <ul>
            <li>you can move a disk by dragging it with your mouse</li>
            <li>you can only move one disk at a time</li>
            <li>you can not move a disk that has another disk on top of it</li>
            <li>a larger disk may not be placed on a smaller disk</li>
          </ul>
          <h6>
            Goodluck! Also, feedback on this game is welcomed!
          </h6>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Header;
