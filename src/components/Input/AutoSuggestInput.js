import React from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';

import inputStyles from './inputStyles';


const Wrapper = styled.div`
  .react-autosuggest__input {
    ${inputStyles}
  }
`;

const AutosuggestInput = props => {
  return (
    <Wrapper>
      <Autosuggest {...props} />
    </Wrapper>
  );
};

export default AutosuggestInput;
