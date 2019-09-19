import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterContact, clearFilter } from '../../actions';
import Filter from '../filter/filter';
import './searchForm.scss';
import Button from '../common/button';


class SearchForm extends React.Component {
  handleInputChange = (e) => {
    const { onInputChange } = this.props;
    const { value } = e.target;

    onInputChange(value);
  };

  // render() {
  //   const { onAddClick } = this.props;
  //
  //   return (
  //     <div className="input-group mb-3">
  //       <div className="input-group-prepend">
  //         <span className="input-group-text">Person</span>
  //       </div>
  //       <input type="text" className="form-control" id="filter" placeholder="Name" onChange={this.handleInputChange} />
  //       <Link to="/add-new" className="btn btn-primary ml-4" onClick={onAddClick}>Add new</Link>
  //     </div>
  //   );
  // }

  render() {
    //const { onAddClick } = this.props;

    return (
      <form>
        <label className="title text-white text-uppercase" htmlFor="search-field">Find your movie</label>
        <input id="search-field" type="text" className="search-field text-white" />
        <div className="d-flex flex-row justify-content-between mt-2">
          <Filter />
          <Button colorStyle="btn-danger" sizeStyle="btn-sm" name="Search" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onInputChange: searchValue => dispatch(filterContact(searchValue)),
  onAddClick: () => dispatch(clearFilter()),
});

export default connect(null, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  //onAddClick: PropTypes.func.isRequired,
};
