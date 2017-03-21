import React from 'react';
import { shallow } from 'enzyme';

import { NavLink, Li, RestyledLink } from '../NavLink';



describe('<NavLink />', () => {
  it('Should render react-router li', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(Li).length).toMatchSnapshot();
  });

  it('should render RestyledLink', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(RestyledLink).length).toMatchSnapshot();
  });
});
