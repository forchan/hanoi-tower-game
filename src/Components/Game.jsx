import React from 'react';
import PropTypes from 'prop-types';
import Tower from '../containers/TowerContainer.jsx';
import { createGameStartDisks } from '../utils/DiskUtils.js';
import { calculateMinimumPossibleMoves } from '../utils/GameUtils.js';
import Menu from '../containers/MenuContainer.jsx';
import { GameStates } from '../constants/GameConstants.js';
import { Button, Card, CardBody } from 'reactstrap';

const propTypes = {
  game: PropTypes.object.isRequired,
  towers: PropTypes.object.isRequired,
  addManyDisksToTower: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired
};

const Game = ({ game, towers, addManyDisksToTower, toggleMenu, setGameState }) => {
  if (game.menu) {
    return (
      <div className="app-body">
        <Menu />
      </div>
    );
  }

  React.useEffect(() => {
    if (game.gameState === GameStates.NOT_STARTED) {
      const initialDisks = createGameStartDisks(game.diskLevel);
      addManyDisksToTower(initialDisks, 1);
      setGameState(GameStates.IN_SESSION);
    }
  }, []);

  const { tower1, tower2, tower3 } = towers;
  const gameWon = (game.gameState === GameStates.WON);

  return (
    <div className="app-body">
      <Card className="menu-box" outline color="secondary">
        <CardBody>
          <div style={{position:'relative'}}>
            <Button
              color={(gameWon) ? "success" : "info"}
              onClick={() => toggleMenu()}
              className="float-right"
            >
              {(gameWon) ? 'New Game' : 'Menu'}
            </Button>
          </div>
          <h6>
            Minimum possible moves: {calculateMinimumPossibleMoves(game.diskLevel)}
          </h6>
          <h6>Your moves: {game.movesTaken}</h6>
        </CardBody>
      </Card>
      <Tower id={1} disks={tower1} />
      <Tower id={2} disks={tower2} />
      <Tower id={3} disks={tower3} />
      {(gameWon) &&
        <Card className="win-message" outline color="secondary">
          <h4 className="text-success">Nice, you win!</h4>
        </Card>
      }
    </div>
  );
};

Game.propTypes = propTypes;

export default Game;
