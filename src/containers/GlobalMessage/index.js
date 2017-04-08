import React from 'react';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';

import {
  getError,
  getMessage,
} from './ducks/selectors';


export const GlobalMessage = props => {
  if(!props.error && !props.message) {
    return null;
  }

  return (
    <Wrapper error={props.error}>
      <span>{props.error || props.message}</span>
    </Wrapper>
  );
};

export const mapStateToProps = state => {
  return {
    error: getError(state),
    message: getMessage(state),
  };
};

export default connect(mapStateToProps, null)(GlobalMessage);
