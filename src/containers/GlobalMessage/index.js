import React from 'react';

import Wrapper from './Wrapper';


const GlobalMessage = props => {
  return (
    <Wrapper error>
      <span>I am a global message</span>
    </Wrapper>
  );
};

export default GlobalMessage;
