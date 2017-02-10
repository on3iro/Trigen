import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../src/components/app';
import Navigation from '../../../src/components/navigation';


describe('App', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toEqual(true);
    expect(wrapper.find(Navigation).exists()).toEqual(true);
  });
});
