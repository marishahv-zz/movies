import React from 'react';
import RadioButton from '../common/radiobutton/radiobutton';

export default class Filter extends React.Component {
  state = { activeFilter: 'title' }

  handleClick = (e) => {
    e.preventDefault();

    if (e.target.tagName.toLowerCase() === 'label') {
      const activeFilterName = e.target.querySelector('input').getAttribute('name');

      this.setState({ activeFilter: activeFilterName });
    }
  }

  render() {
    return (
      <div className="d-flex flex-row w-50">
        <span className="text-white text-uppercase small pt-2">search by</span>
        <div className="btn-toolbar btn-group-toggle" data-toggle="buttons" onClick={(e) => this.handleClick(e)}>
          <RadioButton isChecked={this.state.activeFilter === 'title'} name="Title" />
          <RadioButton isChecked={this.state.activeFilter === 'genre'} name="Genre" />
        </div>
      </div>
    );
  }
}
