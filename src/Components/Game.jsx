import React from 'react';
import Tower from '../containers/TowerContainer.jsx';
import Disk from '../containers/DiskContainer.jsx';
import { createGameStartDisks, createDiskObject } from '../utils/DiskUtils.js';
import Menu from '../containers/MenuContainer.jsx';
import { GameStates } from '../constants/GameConstants.js';

const Game = ({ game, towers, addManyDisksToTower }) => {
  if (game.gameState === GameStates.IN_MENU) {
    return (
      <div className="app-body">
        <Menu />
      </div>
    );
  }

  React.useEffect(() => {
    // console.log(game.diskLevel)
    // const totalDisks = 8;
    // const initialDisks = [];
    // for (let numDisk = totalDisks; numDisk >= 1; numDisk--) {
    //   initialDisks.push(createDiskObject(numDisk));
    // }
    const initialDisks = createGameStartDisks(game.diskLevel);
    addManyDisksToTower(initialDisks, 1);
  }, []);

  const { tower1, tower2, tower3 } = towers;
  return (
    <div className="app-body">
      <Tower id={1} disks={tower1} />
      <Tower id={2} disks={tower2} />
      <Tower id={3} disks={tower3} />
    </div>
  );
};


export default Game;
