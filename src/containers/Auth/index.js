/**
  * Auth
  *
  * @namespace Auth
  */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as selectors from './ducks/selectors';
import Login from './Login';


export class Auth extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if(this.props.isLoggedIn) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <Login />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectors.getLoggedIn(state),
  };
};

Auth.propTypes = {
  location: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps, null)(Auth);
