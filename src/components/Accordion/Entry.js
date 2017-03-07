/**
 * A single accordion entry. Should receive a handleExpand function as props
 * which in turn is called whenever the user clicks on the entry question.
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';


export const Wrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
`;

export const Question = styled.div`
  background-color: #e3e3e3;
  padding: 10px;
  cursor: pointer;
`;

export const Answer = styled.div`
  padding: 10px;
`;


const Entry = ({ handleExpand, expanded = false, question, answer }) => {
  return (
    <Wrapper>
      <Question onClick={handleExpand}>{question}</Question>
      {
        expanded &&
        <Answer>{answer}</Answer>
      }
    </Wrapper>
  );
};

Entry.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  expanded: PropTypes.bool
};

export default Entry;
