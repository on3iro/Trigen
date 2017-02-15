import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import A from '../A';
import Wrapper from '../Wrapper';
import Navigation from 'components/Navigation';

describe('<Header />', () => {
  it('should render a Wrapper', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });

  it('Should render an <A />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(A).length).toEqual(1);
  });

  it('Should render a <Navigation />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Navigation).length).toEqual(1);
  });
});
