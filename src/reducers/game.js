import { GameStates, NO_DISKS_YET } from '../constants/GameConstants.js';
import { SET_GAME_STATE, SET_DISKS } from '../constants/ActionConstants.js';

const initialGameState = ({
  gameState: GameStates.IN_MENU,
  diskLevel: NO_DISKS_YET
});

const gameReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState
      };
    case SET_DISKS:
      return {
        ...state,
        diskLevel: action.numDisks
      };
    default:
      return state;
  }
};

export default gameReducer;
