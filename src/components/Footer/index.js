/**
 * Footer that renders some content
 *
 * @namespace Footer
  */

import React from 'react';
import styled from 'styled-components';

import FooterLink from './FooterLink';
import Wrapper from './Wrapper';


const Divider = styled.div`
  display: inline-block;
  content: "";
  margin: 0 10px;
  width: 1px;
  height: 14px;
  border: 1px solid ${props => props.theme.noneWhite};
`;

const Footer = () => {
  return (
    <Wrapper className="footer">
      <FooterLink to="/impressum">Impressum</FooterLink>
      <Divider />
      <FooterLink to="/agb">AGB</FooterLink>
    </Wrapper>
  );
};

export default Footer;
