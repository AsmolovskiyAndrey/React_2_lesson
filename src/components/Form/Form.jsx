import React, { Component } from 'react';
import './Form.css';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    phone: '',
    experience: 'junior',
    license: false,
  };

  nameInpitId = nanoid();
  phoneInpitId = nanoid();

  inputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  licenseChange = event => {
    // console.log(event.currentTarget.checked);
    this.setState({ license: event.currentTarget.checked });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.outOnSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', phone: '', experience: 'junior' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInpitId}>
          {'Имя'}
          <input
            type="text"
            id={this.nameInpitId}
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor={this.phoneInpitId}>
          {'Телефон'}
          <input
            type="tel"
            id={this.phoneInpitId}
            name="phone"
            value={this.state.phone}
            onChange={this.inputChange}
          />
        </label>

        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value={'junior'}
            onChange={this.inputChange}
            checked={this.state.experience === 'junior'}
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value={'middle'}
            onChange={this.inputChange}
            checked={this.state.experience === 'middle'}
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value={'senior'}
            onChange={this.inputChange}
            checked={this.state.experience === 'senior'}
          />{' '}
          Senior
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.licenseChange}
          />
          {'Согласен с условием'}
        </label>

        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
