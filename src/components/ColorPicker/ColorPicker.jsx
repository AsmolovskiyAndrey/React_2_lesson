import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    const optionsClasses = ['color-picker__option'];
    const { activeOptionsIdx } = this.state;

    if (index === activeOptionsIdx) {
      optionsClasses.push('color-picker__option--active');
    }

    return optionsClasses.join(' ');
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIdx];

    return (
      <div className="color-picker">
        <h2 className="color-picker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
