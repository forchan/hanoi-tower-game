import { GameStates } from '../constants/GameConstants.js';
import {
  SET_GAME_STATE,
  SET_DISKS,
  TOGGLE_MENU,
  INCREMENT_MOVES,
  RESET_MOVE_COUNT
} from '../constants/ActionConstants.js';

const initialGameState = ({
  gameState: GameStates.NOT_STARTED,
  diskLevel: 3,
  movesTaken: 0,
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
      };
    case INCREMENT_MOVES:
      return {
        ...state,
        movesTaken: state.movesTaken + 1
      };
    case RESET_MOVE_COUNT:
      return {
        ...state,
        movesTaken: 0
      }
    default:
      return state;
  }
};

export default gameReducer;
