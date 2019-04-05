import React from 'react';
import Disk from '../containers/DiskContainer.jsx';

export const createDiskObject = diskId => ({
  id: diskId,
  component: <Disk id={diskId} size={diskId} key={diskId} />
});

export const createGameStartDisks = numDisks => {
  let gameStartDisks = [];
  for (let numDisk = numDisks; numDisk > 0; numDisk--) {
    gameStartDisks.push(createDiskObject(parseInt(numDisk)));
  }
  return gameStartDisks;
};
