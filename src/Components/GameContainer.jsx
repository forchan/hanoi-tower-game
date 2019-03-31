import React, { Component } from 'react';
import Tower from './Tower.jsx';
import Disk from './Disk.jsx';
import { TOWERS } from '../Constants/Constants.js'

class GameContainer extends Component {
  state = {
    totalDisks: 8
  }
  render() {
    var disks = [];
    for (let numDisk = 1; numDisk <= this.state.totalDisks; numDisk++) {
      disks.push(
        <Disk size={numDisk} key={numDisk}/>
      );
    }
    return (
      <div className="app-body">
        {TOWERS.map((tower, index) => {
          return (
            <Tower key={index}>
              {disks}
            </Tower>
          );
        })}
      </div>
    );
  }
}

export default GameContainer;
