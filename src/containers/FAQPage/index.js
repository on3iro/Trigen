/**
  * FAQ page of the App
  *
  * @namespace FAQ
  */

import React from 'react';

import Accordion from 'components/Accordion';
import H1 from 'components/H1';

import Wrapper from './Wrapper';
import entries from './entries';


const FAQ = () => {
  return (
    <Wrapper>
      <H1>FAQ</H1>
      <Accordion entries={entries} />
    </Wrapper>
  );
};

export default FAQ;
