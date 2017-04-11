/**
 * Footer that renders some content
 *
 * @namespace Footer
  */

import React from 'react';
import styled from 'styled-components';
import Grid from 'grid-styled';

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

const P = styled.p`
  margin: 0 10px;

  text-align: right;
  font-size: 0.8rem;

  color: ${props => props.theme.noneWhite};
`;

const Footer = () => {
  return (
    <Wrapper className="footer">
      <Grid md={1 / 3}>
        <FooterLink to="/impressum">Impressum</FooterLink>
        <Divider />
        <FooterLink to="/agb">AGB</FooterLink>
      </Grid>
      <Grid md={1 / 3} />
      <Grid md={1 / 3}>
        <P>
          {'\u00A9'} Trigen, Das Konzept GmbH <br/>
          Version: 0.1.0 Alpha
        </P>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
