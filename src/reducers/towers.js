import {
  ADD_ONE_DISK_TO_TOWER,
  ADD_MANY_DISKS_TO_TOWER,
  REMOVE_TARGET_DISK_FROM_ALL_TOWERS,
  REMOVE_ALL_DISKS
} from '../constants/ActionConstants.js';
import {
  TOWER_ONE,
  TOWER_TWO,
  TOWER_THREE
} from '../constants/GameConstants.js';

const initialTowers = {
  [TOWER_ONE]: [],
  [TOWER_TWO]: [],
  [TOWER_THREE]: []
};

const towersReducer = (state = initialTowers, action) => {
  switch (action.type) {
    case ADD_ONE_DISK_TO_TOWER:
      return {
        ...state,
        [action.towerName]: [
          ...state[action.towerName],
          action.diskComponent
        ]
      };
    case ADD_MANY_DISKS_TO_TOWER:
      return {
        ...state,
        [action.towerName]: [
          ...state[action.towerName],
          ...action.arrayOfDisks
        ]
      };
    case REMOVE_TARGET_DISK_FROM_ALL_TOWERS:
      let newTower1 = state[TOWER_ONE].filter(disk => action.diskId !== disk.id);
      let newTower2 = state[TOWER_TWO].filter(disk => action.diskId !== disk.id);
      let newTower3 = state[TOWER_THREE].filter(disk => action.diskId !== disk.id);
      return {
        ...state,
        [TOWER_ONE]: newTower1,
        [TOWER_TWO]: newTower2,
        [TOWER_THREE]: newTower3
      };
    case REMOVE_ALL_DISKS:
      return {
        ...state,
        [TOWER_ONE]: [],
        [TOWER_TWO]: [],
        [TOWER_THREE]: []
      };
    default:
      return state;
  }
};

export default towersReducer;
