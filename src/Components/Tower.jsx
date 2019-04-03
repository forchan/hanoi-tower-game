import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd'
import Disk from '../containers/DiskContainer.jsx';
import { DISK } from '../constants/GameConstants.js';
import { createDiskObject } from '../utils/DiskUtils.js';

const defaultProps = {
  disks: []
};

const propTypes = {
  disks: PropTypes.array
};

const Tower = ({ disks, connectDropTarget, canDrop, isOver }) => {
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
    props.transferDiskBetweenTowers(newDisk, props.id);
  },
  canDrop(props, monitor, component) {
    const item = monitor.getItem();
    return props.canDropDiskToTower(item.id, props.id, props.disks);
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
