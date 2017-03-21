import React from 'react';
import { shallow } from 'enzyme';

import NavLink from '../NavLink';
import { RestyledLink } from '../NavLink'
import { Li } from '../NavLink';


describe('<NavLink />', () => {
  it('should render styled.li', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(Li).length).toMatchSnapshot();
  });

  it('should render <RestyledLink />', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(RestyledLink).length).toMatchSnapshot();
  });
});
