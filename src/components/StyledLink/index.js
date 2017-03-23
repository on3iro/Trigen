/**
 * A simple styled react-router Link element.
  */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const LinkWrapper = props => {
  // Pulls off secondary prop to avoid react-unknown-prop warning on underlying <a/>
  const { secondary, ...rest } = props;

  return <Link {...rest} />;
};

const StyledLink = styled(LinkWrapper)`
  display: inline-block;
  margin: 5px;
  width: 100px;
  text-decoration: none;
  color: ${props => props.secondary ? '#888' : '#fff'};
  cursor: pointer;
  outline: 0;
`;

export default StyledLink;
