import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../common/logo/logo';

const movieDetails = ({ posterPath, title, overview }) => (
  <div className="bg-red">
		<div className="d-flex justify-content-between align-items-center">
			<Logo />
			<Link to="/" className="btn btn-danger btn-small ml-4">Search</Link>
		</div>
    <div className="d-flex">
      <img src={posterPath} className="w-25 mr-4" alt="" />
      <div>
        <h5 className="lead font-weight-bold text-danger">{title}</h5>
        <p className="text-white">{overview}</p>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
	const {movies} = state;
	const { id } = ownProps.match.params;
	const movie = movies.find(movie => {
		return movie.id == id;
	})
	
	return {
		posterPath: movie.poster_path,
		title: movie.title,
		overview: movie.overview,
	}
}

export default withRouter(connect(mapStateToProps)(movieDetails));
