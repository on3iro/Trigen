/**
  * The user registration form
  *
  * @namespace RegisterPage.RegisterForm
  * @memberOf Register
  */

import React, { Component } from 'react';

import H1 from 'components/H1';
import Button from 'components/Button';
import Input from 'components/Input';


class RegisterForm extends Component {
  /**
    * Class component RegisterForm
    *
    * @class RegisterForm
    * @namespace RegisterForm
    * @memberOf RegisterPage.RegisterForm
    */

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirm: '',
    };
  }

  handleInputChange = (event) => {
    /**
      * Handles changes on input elements.
      * Sets the value of the respective input.
      *
      * @method handleInputChange
      * @memberOf RegisterPage.RegisterForm.RegisterForm
      * @namespace handleInputChange
      * @param {Object} event - Triggered event
      * @returns {undefined}
      */

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    return undefined;
  }

  render() {
    return (
      <form onSubmit={() => {}}>
        <H1>Register</H1>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={this.state.confirm}
          onChange={this.handleInputChange}
        />
        <Button submit>Register Now</Button>
      </form>
    );
  }
}

export default RegisterForm;
