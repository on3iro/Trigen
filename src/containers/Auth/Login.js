import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import StyledLink from 'components/StyledLink';

import { loginSubmit } from './ducks/actions';


const RestyledLink = styled(StyledLink)`
  color: #888;
`;

export class Login extends Component {
  handleSubmit = values => {
    this.props.loginSubmit(values);
  }

  render() {
    return (
      <Wrapper>
        <LoginForm onSubmit={this.handleSubmit} />
        <RestyledLink to="/register">Register</RestyledLink>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginSubmit,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
