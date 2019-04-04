import React from 'react';
import Tower from '../containers/TowerContainer.jsx';
import Disk from '../containers/DiskContainer.jsx';
import { createGameStartDisks, createDiskObject } from '../utils/DiskUtils.js';
import Menu from '../containers/MenuContainer.jsx';
import { GameStates, NO_DISKS_YET } from '../constants/GameConstants.js';
import { Button } from 'reactstrap';

const Game = ({ game, towers, addManyDisksToTower, setGameState }) => {
  if (game.gameState === GameStates.IN_MENU) {
    return (
      <div className="app-body">
        <Menu />
      </div>
    );
  }

  const { tower1, tower2, tower3 } = towers;

  React.useEffect(() => {
    if (tower1.length === 0 && tower2.length === 0 && tower3.length === 0) {
      const initialDisks = createGameStartDisks(game.diskLevel);
      addManyDisksToTower(initialDisks, 1);
    }
  }, []);

  return (
    <div className="app-body">
      <Button
        color="info"
        className="menu-button"
        onClick={() => setGameState(GameStates.IN_MENU)}
      >
        Menu
      </Button>
      <Tower id={1} disks={tower1} />
      <Tower id={2} disks={tower2} />
      <Tower id={3} disks={tower3} />
    </div>
  );
};


export default Game;
