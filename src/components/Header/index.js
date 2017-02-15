import  React from 'react';

import Navigation from 'components/Navigation';
import A from './A';
import Wrapper from './Wrapper';


export const Header = () => {
  return (
    <Wrapper>
      <A href="#">
        Logo
      </A>
      <Navigation />
    </Wrapper>
  );
};

export default Header;
