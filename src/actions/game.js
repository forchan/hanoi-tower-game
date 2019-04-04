import { GameStates } from '../constants/GameConstants.js';
import { removeAllDisks } from '../actions/towers.js';

import {
  SET_GAME_STATE,
  SET_DISKS,
  TOGGLE_MENU,
  INCREMENT_MOVES
} from '../constants/ActionConstants.js';

export const setGameState = gameState => ({
  type: SET_GAME_STATE,
  gameState
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU
});

const setDisks = numDisks => ({
  type: SET_DISKS,
  numDisks
});

export const setupNewGame = numDisks => dispatch => {
  // gameState needs to be NOT_STARTED to setup disks in Game component
  // the Game component will set gameState to IN_SESSION after disks are created
  dispatch(setDisks(numDisks));
  dispatch(setGameState(GameStates.NOT_STARTED));
  dispatch(toggleMenu());
};

export const incrementMoves = () => ({
  type: INCREMENT_MOVES
})
