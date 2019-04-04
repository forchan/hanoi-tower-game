import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd'
import Disk from '../containers/DiskContainer.jsx';
import { DISK } from '../constants/GameConstants.js';
import { createDiskObject } from '../utils/DiskUtils.js';
import { canDropDiskToTower } from '../utils/GameUtils.js';
import { GameStates } from '../constants/GameConstants.js';

const defaultProps = {
  disks: []
};

const propTypes = {
  disks: PropTypes.array
};

const Tower = ({ disks, connectDropTarget, canDrop, isOver, incrementMoves }) => {
  const disksToRender = [];
  disks.forEach((disk) => {
    disksToRender.push(disk.component);
  })
  return connectDropTarget(
    <div className="tower">
      {disksToRender}
    </div>
  );
}

Tower.defaultProps = defaultProps;
Tower.propTypes = propTypes;

const spec = {
  drop(props, monitor, component) {
    const itemId = monitor.getItem().id;
    const newDisk = createDiskObject(itemId);
    props.incrementMoves();
    if (props.id === 3 && props.towers.tower3.length === props.game.diskLevel - 1) {
      // if this is the last disk being dropped on tower3, player wins
      props.setGameState(GameStates.WON);
    }
    props.transferDiskBetweenTowers(newDisk, props.id);
  },
  canDrop(props, monitor, component) {
    const item = monitor.getItem();
    return canDropDiskToTower(item.id, props.id, props.disks);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

export default DropTarget(DISK, spec, collect)(Tower);
