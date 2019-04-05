import {
  TOWER_ONE,
  TOWER_TWO,
  TOWER_THREE
} from '../constants/GameConstants.js';

const getLastElementId = array => array.slice(-1)[0].id; // works only if it has elements

export const canDropDiskToTower = (diskId, towerId, tower) => {
  if (tower.length > 0 && getLastElementId(tower) <= diskId) {
    return false;
  }
  return true;
};

export const canDragDiskFromTower = (diskId, towers = {}) => {
  if (towers[TOWER_ONE].length > 0 && getLastElementId(towers[TOWER_ONE]) === diskId) {
    return true;
  }
  if (towers[TOWER_TWO].length > 0 && getLastElementId(towers[TOWER_TWO]) === diskId) {
    return true;
  }
  if (towers[TOWER_THREE].length > 0 && getLastElementId(towers[TOWER_THREE]) === diskId) {
    return true;
  }
  return false;
};

export const calculateMinimumPossibleMoves = numDisks => (
  Math.pow(2, numDisks) - 1
);
