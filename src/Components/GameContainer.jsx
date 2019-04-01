import React, { Component } from 'react';
import Tower from './Tower.jsx';
import Disk from './Disk.jsx';

class GameContainer extends Component {
  state = {
    leftTowerDisks: [],
    middleTowerDisks: [],
    rightTowerDisks: []
  }
  render() {
    const totalDisks = 8;
    for (let numDisk = totalDisks; numDisk >= 1; numDisk--) {
      this.state.leftTowerDisks.push(
        <Disk size={numDisk} key={numDisk} />
      );
    }
    return (
      <div className="app-body">
        <Tower disks={this.state.leftTowerDisks} />
        <Tower disks={this.state.middleTowerDisks} />
        <Tower disks={this.state.rightTowerDisks} />
      </div>
    );
  }
}

export default GameContainer;
