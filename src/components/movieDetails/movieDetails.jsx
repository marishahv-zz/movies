import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../common/logo/logo';

const movieDetails = ({ posterPath, title, overview }) => (
  <div>
    <Logo />
    <div>
      <img src={posterPath} className="img-thumbnail img_size" alt="" />
      <div>
        <h5 className="lead font-weight-bold">{title}</h5>
        <p>{overview}</p>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onDetailsClick: () => dispatch(),
});

export default connect(null, mapDispatchToProps)(movieDetails);
