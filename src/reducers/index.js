import { combineReducers } from 'redux';
import towersReducer from './towers.js';
import gameReducer from './game.js';

const rootReducer = combineReducers({
  towers: towersReducer,
  game: gameReducer
});

export default rootReducer;
