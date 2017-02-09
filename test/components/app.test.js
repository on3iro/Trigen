import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/app';


describe('App', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toEqual('Hello World');
  });
});
