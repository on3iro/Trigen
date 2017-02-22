/**
  * FAQ page of the App
  *
  * @namespace FAQ
  */

import React from 'react';

import Wrapper from './Wrapper';
import Accordion from 'components/Accordion';


const FAQ = () => {
  const entries = [
    {
      question: 'Who are you?',
      answer: 'I am the unspeakable!'
    },
    {
      question: 'Why are you?',
      answer: 'Are you dumb or something?'
    },
    {
      question: 'Is there something else?',
      answer: 'Whatever you mean by that, it sounds quite esoteric!'
    }
  ];

  return (
    <Wrapper>
      <Accordion entries={entries} />
    </Wrapper>
  );
};

export default FAQ;
