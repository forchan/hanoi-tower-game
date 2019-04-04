import React from 'react';
import Tower from '../containers/TowerContainer.jsx';
import Disk from '../containers/DiskContainer.jsx';
import { createDiskObject } from '../utils/DiskUtils.js';
import Menu from '../components/Menu.jsx';

const gameInSession = false;
const Game = ({ towers, addManyDisksToTower }) => {
  if (!gameInSession) {
    return (<div className="app-body"><Menu/ ></div>)
  }
  React.useEffect(() => {
    const totalDisks = 8;
    const initialDisks = [];
    for (let numDisk = totalDisks; numDisk >= 1; numDisk--) {
      initialDisks.push(createDiskObject(numDisk));
    }
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
