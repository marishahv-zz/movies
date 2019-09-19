import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, colorStyle, sizeStyle, onClick,
}) => <button type="button" onClick={onClick} className={`btn ml-4 ${`${colorStyle} ${sizeStyle}`}`}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  colorStyle: PropTypes.string.isRequired,
  sizeStyle: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  sizeStyle: '',
};

export default Button;
