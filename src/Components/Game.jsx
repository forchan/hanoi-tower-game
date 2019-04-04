import React from 'react';
import Tower from '../containers/TowerContainer.jsx';
import Disk from '../containers/DiskContainer.jsx';
import { createGameStartDisks, createDiskObject } from '../utils/DiskUtils.js';
import Menu from '../containers/MenuContainer.jsx';
import { GameStates, NO_DISKS_YET } from '../constants/GameConstants.js';
import { Button } from 'reactstrap';

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

  return (
    <div className="app-body">
      <Button
        color={(game.gameState === GameStates.WON) ? "success" : "info"}
        className="menu-button"
        onClick={() => toggleMenu()}
      >
        {(game.gameState === GameStates.WON) ? 'New Game' : 'Menu'}
      </Button>
      <Tower id={1} disks={tower1} />
      <Tower id={2} disks={tower2} />
      <Tower id={3} disks={tower3} />
    </div>
  );
};


export default Game;
