import { GameStates } from '../constants/GameConstants.js';
import { SET_GAME_STATE, SET_DISKS } from '../constants/ActionConstants.js';

export const setGameState = gameState => ({
  type: SET_GAME_STATE,
  gameState
});

const setDisks = numDisks => ({
  type: SET_DISKS,
  numDisks
});

export const startNewGame = numDisks => dispatch => {
  dispatch(setGameState(GameStates.IN_SESSION));
  dispatch(setDisks(numDisks));
};
