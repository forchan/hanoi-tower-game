import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd'
import { DISK } from '../Constants/Constants.js'

const defaultProps = {
  size: 1,
  draggable: true
};

const propTypes = {
  size: PropTypes.number,
  draggable: PropTypes.bool
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
}

Disk.defaultProps = defaultProps;
Disk.propTypes = propTypes;

export default DragSource(
  DISK,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Disk);
