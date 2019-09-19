import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app';
import rootReducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import contactsData from './data';
//import { SERVER_URL } from './constants/constants';

const initialState = {
  movies: [],
  searchValue: '',
};

/* const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-undef,no-underscore-dangle,no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
); */

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const fetchMovies = async () => {
//   const response = await fetch(SERVER_URL);
//   const movies = await response.json();
//
//   return movies.data;
// }
//
// //fetchMovies();
// fetchMovies().then(data => console.log("!!!", data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
