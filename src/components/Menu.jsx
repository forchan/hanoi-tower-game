import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
} from 'reactstrap';
import { GameStates, AVAILABLE_LEVELS } from '../constants/GameConstants.js';
import { HANOI_TOWER_GAME_NAME } from '../constants/GameConstants.js';

const propTypes = {
  game: PropTypes.object.isRequired,
  setupNewGame: PropTypes.func.isRequired,
  removeAllDisks: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  resetMoveCount: PropTypes.func.isRequired
};

const Menu = ({ game, setupNewGame, removeAllDisks, toggleMenu, resetMoveCount }) => {
  const [ selectedLevel, setSelectedLevel ] = useState(game.diskLevel);
  const levelOptions = AVAILABLE_LEVELS.map((availableLevel) => (
    <option key={availableLevel}>{availableLevel}</option>
  ));
  const clearDisksAndStartNewGame = () => {
    removeAllDisks();
    setupNewGame(selectedLevel);
    resetMoveCount();
  }

  return (
    <Modal isOpen={true} fade={false} toggle={() => {}} centered>
      <ModalBody>
        <h1>
          {HANOI_TOWER_GAME_NAME}
        </h1>
        &nbsp;
        <Form>
          <FormGroup row>
            <Col sm={2} />
            <Label for="selectLevel" md={5}>
              <h5>Select level of disks</h5>
            </Label>
            <Col sm={2}>
              <Input
                type="select"
                name="select"
                id="selectLevel"
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
              >
                {levelOptions}
              </Input>
            </Col>
          </FormGroup>
        </Form>
        <Button
          className="float-right"
          color={(game.gameState === GameStates.IN_SESSION) ? "danger" : "success"}
          onClick={clearDisksAndStartNewGame}
        >
          Start New Game
        </Button>
        {(game.gameState === GameStates.IN_SESSION) &&
          <Button
            className="float-left"
            color={(game.gameState === GameStates.IN_SESSION) ? "success" : "info"}
            onClick={() => toggleMenu()}
          >
            Resume Game
          </Button>
        }
      </ModalBody>
    </Modal>
  );
};

Menu.propTypes = propTypes;

export default Menu;
