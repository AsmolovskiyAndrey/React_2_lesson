import React, { PureComponent } from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

export class ColorPicker extends PureComponent {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('color-picker__option', {
      'color-picker__option--active': index === this.state.activeOptionsIdx,
    });
    //   const optionsClasses = ['color-picker__option'];
    //   const { activeOptionsIdx } = this.state;

    //   if (index === activeOptionsIdx) {
    //     optionsClasses.push('color-picker__option--active');
    //   }

    //   return optionsClasses.join(' ');
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
