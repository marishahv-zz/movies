import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from '../movieItem/movieItem';
import getMoviesMiddleware from '../../middlewares/getMoviesMiddleware';

// const MovieList = ({ contacts, searchValue }) => {
//   const filteredContacs = contacts.filter((contact) => {
//     const name = contact.name.toLowerCase().replace(/ /g, '');
//
//     return name.includes(searchValue.toLowerCase());
//   });
//
//   const contactList = filteredContacs.map((contact, index) => {
//     const obj = {
//       id: contact.id,
//       name: contact.name,
//       phone: contact.phone,
//     };
//
//     // eslint-disable-next-line react/no-array-index-key
//     return <ContactItem contact={obj} key={`${contact.id}${index}`} />;
//   });
//
//   return (
//     <React.Fragment>
//       {(contactList.length === 0) && <p className="mt-4">No results found :(</p>}
//       <table className="table mt-4">
//         <tbody>
//           {contactList}
//         </tbody>
//       </table>
//     </React.Fragment>
//   );
// };
//
// const mapStateToProps = ({ contacts, searchValue }) => ({
//   contacts,
//   searchValue,
// });
//
// export default connect(mapStateToProps)(MovieList);
//
// MovieList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   searchValue: PropTypes.string.isRequired,
// };


class MovieList extends React.Component {
  filteredMovies = this.props.movies.filter((movie) => {
    const title = movie.title.toLowerCase().replace(/ /g, '');

    return title.includes(this.props.searchValue.toLowerCase());
  });

  movieList = this.filteredMovies.map((movie, index) => {
    const obj = {
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
    };

    return <MovieItem contact={obj} key={`${movie.id}${index}`} />;
  });

  componentDidMount() {
    this.props.dispatch(getMoviesMiddleware());
  }

  render() {
    const { movies } = this.props;
    const movieList = movies.map((movie, index) => {
      const obj = {
        id: movie.id,
        title: movie.title,
        genres: movie.genres,
        posterPath: movie.poster_path,
      };

      return <MovieItem movie={obj} key={`${movie.id}${index}`} />;
    });

    return (

      <React.Fragment>
        {(movieList.length > 0)
          && (
          <table className="table mt-4">
            <tbody>
              {movieList}
            </tbody>
          </table>
          )
        }
      </React.Fragment>
    );
  }
}


const mapStateToProps = ({ movies, searchValue }) => ({
  movies,
  searchValue,
});

export default connect(mapStateToProps)(MovieList);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchValue: PropTypes.string.isRequired,
};
