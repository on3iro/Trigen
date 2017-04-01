import React from 'react';
import { shallow } from 'enzyme';

import IntroText from '../IntroText';


describe('<IntroText />', () => {
  it('should render <p>', () => {
    const enzymeWrapper = shallow(<IntroText />);
    expect(enzymeWrapper.find('p').length).toBe(1);
  });
});
