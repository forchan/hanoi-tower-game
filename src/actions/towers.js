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

const getTowerNameById = id => {
  switch (id) {
    case 1:
      return TOWER_ONE;
    case 2:
      return TOWER_TWO;
    case 3:
      return TOWER_THREE;
    default:
      return 'invalid-id';
  }
};

export const addOneDiskToTower = (diskComponent, towerId) => ({
  type: ADD_ONE_DISK_TO_TOWER,
  diskComponent,
  towerName: getTowerNameById(towerId)
});

export const addManyDisksToTower = (arrayOfDisks, towerId) => ({
  type: ADD_MANY_DISKS_TO_TOWER,
  arrayOfDisks,
  towerName: getTowerNameById(towerId)
});

export const removeAllDisks = () => ({
  type: REMOVE_ALL_DISKS
});

export const removeTargetDiskFromAllTowers = (diskId) => ({
  type: REMOVE_TARGET_DISK_FROM_ALL_TOWERS,
  diskId
});

export const transferDiskBetweenTowers = (diskComponent, targetTowerId) => dispatch => {
  dispatch(removeTargetDiskFromAllTowers(diskComponent.id));
  dispatch(addOneDiskToTower(diskComponent, targetTowerId));
};
