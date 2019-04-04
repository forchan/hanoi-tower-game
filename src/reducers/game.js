import { GameStates } from '../constants/GameConstants.js';
import {
  SET_GAME_STATE,
  SET_DISKS,
  TOGGLE_MENU
} from '../constants/ActionConstants.js';

const initialGameState = ({
  gameState: GameStates.NOT_STARTED,
  diskLevel: 3,
  menu: true
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
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu
      }
    default:
      return state;
  }
};

export default gameReducer;
