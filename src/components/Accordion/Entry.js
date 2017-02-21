import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
`;

const Question = styled.div`
  background-color: #e3e3e3;
  padding: 10px;
  cursor: pointer;
`;

const Answer = styled.div`
  padding: 10px;
`;

const Entry = props => {
  return (
    <Wrapper>
      <Question onClick={props.handleExpand}>{props.question}</Question>
      {
        props.show &&
        <Answer>{props.answer}</Answer>
      }
    </Wrapper>
  );
};

export default Entry;
