import { combineReducers } from 'redux';
//import contactsReducer from './contactsReducer';
import filterReducer from './filterReducer';
import movieReducer from './moviesReducer';

export default combineReducers({
  movies: movieReducer,
  searchValue: filterReducer,
});
