import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd'
import { canDragDiskFromTower } from '../utils/GameUtils.js';
import { GameStates, DISK } from '../constants/GameConstants.js'

const defaultProps = {
  size: 1,
  draggable: true
};

const propTypes = {
  size: PropTypes.number,
  draggable: PropTypes.bool,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

const Disk = ({ connectDragSource, isDragging, draggable, size }) => {
  const diskClassName = 'disk disk' + size;

  if (draggable) {
    return (
      <div
        className={diskClassName}
        ref={connectDragSource}
        style={{ opacity: isDragging ? 0 : 1 }}
      />
    );
  }

  return <div className={diskClassName} />;
};

Disk.defaultProps = defaultProps;
Disk.propTypes = propTypes;

const cardSource = {
  canDrag(props, monitor) {
    if (props.game.gameState !== GameStates.IN_SESSION) {
      return false;
    }
    return canDragDiskFromTower(props.id, props.towers);
  },
  beginDrag(props, monitor) {
    const item = { id: props.id };
    return item;
  }
};

export default DragSource(
  DISK,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Disk);
