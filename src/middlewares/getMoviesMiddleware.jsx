import { SERVER_URL } from '../constants/constants';
import { initState } from '../actions';

const fetchMovies = async () => {
  const response = await fetch(SERVER_URL);
  const movies = await response.json().catch(err => console.log('An error happend while fetching data from server: ', err));

  return movies ? movies.data : null;
};

const getMoviesMiddleware = () => (dispatch) => {
  fetchMovies().then(
    movies => dispatch(initState(movies)),
  );
};

export default getMoviesMiddleware;
