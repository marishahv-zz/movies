import { INIT_STATE } from '../constants/constants';

const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case INIT_STATE: {
      movies = [...action.payload];

      return movies;
    }
    default: return [...movies];
  }
};

export default movieReducer;
