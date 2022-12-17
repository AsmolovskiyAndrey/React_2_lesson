import React, { Component } from 'react';
import './Dropdown.css';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}
