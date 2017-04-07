import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';

import FooterLink from '../FooterLink';


describe('<FooterLink />', () => {
  it('should render <Link />', () => {
    const  enzymeWrapper = shallow(<FooterLink to='/login' />);

    expect(enzymeWrapper.find(Link).exists()).toBe(true);
  });
});
