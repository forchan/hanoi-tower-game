import { combineReducers } from 'redux';
import towersReducer from './towers';

const rootReducer = combineReducers({
  towers: towersReducer
});

export default rootReducer;
