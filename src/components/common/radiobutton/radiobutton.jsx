import React from 'react';

export default class RadioButton extends React.Component {
  state = {
    checked: this.props.isChecked,
  };

  // handleClick() {
  //   this.setState(prevState => ({
  //     checked: !this.state.checked
  //   }));
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      checked: nextProps.isChecked,
    };
  }

  render() {
    return (
      <label className={`ml-2 btn btn-sm ${this.state.checked ? 'btn-danger' : 'btn-secondary'}`}>
        <input type="radio" name={this.props.name} autoComplete="off" />
        {this.props.name}
      </label>
    );
  }
}
