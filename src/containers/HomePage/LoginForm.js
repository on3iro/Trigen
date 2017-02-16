/**
  * A simple login form
  *
  * @namespace LoginForm
  * @memberOf module:HomePage
  */

import React, { Component, PropTypes } from 'react';

import H1 from 'components/H1';
import Button from 'components/Button';
import Input from 'components/Input';


class LoginForm extends Component {
  /**
    * Class component LoginForm
    *
    * @class LoginForm
    * @memberOf LoginForm
    * @inner
    */

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    /**
      * Handles changes on input elements.
      * Sets the value of the respective input.
      *
      * @method handleInputChange
      * @inner
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
        <H1>Login</H1>
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
        <Button submit>Login</Button>
      </form>
    );
  }
}

export default LoginForm;
