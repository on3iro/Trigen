/*
  * The user registration form
  *
  * @namespace RegisterPage.RegisterForm
  * @memberOf Register
  */

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import H1 from 'components/H1';
import Button from 'components/Button';

import RenderField from './RenderField';


export const validate = values => {
  const errors = {};
  const REQUIRED = 'Pflichtfeld';

  if(!values.email) {
    errors.email = REQUIRED;
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ungültige Email-Adresse';
  }

  if(!values.password) {
    errors.password = REQUIRED;
  }

  if(!values.name) {
    errors.name = REQUIRED;
  }

  if(!values.confirm) {
    errors.confirm = REQUIRED;
  }else if(values.confirm !== values.password) {
    errors.confirm = 'Passwörter stimmen nicht überein!';
  }

  return errors;
};

export const RegisterForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <H1>Registrierung</H1>
      <Field name="email" type="text"
        component={RenderField} label="Email"
      />
      <Field name="password" type="password"
        component={RenderField} label="Passwort"
      />
      <Field name="confirm" type="password"
        component={RenderField} label="Passwort wiederholen"
      />
      <Button submit>Jetzt kostenlos registrieren</Button>
    </form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm);
