/**
 * Footer that renders some content
 *
 * @namespace Footer
  */

import React from 'react';

import FooterLink from './FooterLink';
import Wrapper from './Wrapper';


const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li><FooterLink to="/impressum">Impressum</FooterLink></li>
        <li><FooterLink to="/agb">AGB</FooterLink></li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
