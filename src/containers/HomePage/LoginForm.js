/**
  * A basic LoginForm component
  *
  * @namespace HomePage.LoginForm
  * @memberOf HomePage
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
    * @namespace LoginForm
    * @memberOf HomePage.LoginForm
    */

  constructor(props) {
    /**
      * Constructor of the LoginForm
      *
      * @constructs
      */

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
      * @memberOf HomePage.LoginForm.LoginForm
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
