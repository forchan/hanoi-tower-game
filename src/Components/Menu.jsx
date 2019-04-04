import React, { useState } from 'react';
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
import { GameStates } from '../constants/GameConstants.js';

const Menu = ({ game, setupNewGame, removeAllDisks, toggleMenu, resetMoveCount }) => {
  const [ selectedLevel, setSelectedLevel ] = useState(game.diskLevel);
  const availableLevels = [ 3, 4, 5, 6, 7, 8 ];
  const levelOptions = availableLevels.map((availableLevel) => (
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
          Towers of Hanoi
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

export default Menu;
