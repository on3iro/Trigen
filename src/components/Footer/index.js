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
      <FooterLink to="/impressum">Impressum</FooterLink>
      <FooterLink to="/agb">AGB</FooterLink>
    </Wrapper>
  );
};

export default Footer;
