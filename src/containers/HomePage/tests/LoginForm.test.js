import React from 'react';
import { mount } from 'enzyme';

import LoginForm from '../LoginForm';
import H1 from 'components/H1';


const renderComponent = (props ={}) => mount(
  <LoginForm {...props} />
);

describe('<LoginForm />', () => {
  it('should render <form> tag', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render <H1>', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(H1).length).toEqual(1);
  });

  it('should render 3x <Input />', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should render text Input', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('input').findWhere(n => n.props().type === 'text').exists())
      .toEqual(true);
  });

  it('should render Password input', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('input').findWhere(n => n.props().type === 'password').exists())
      .toEqual(true);
  });

  it('should render submit input ', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('input').findWhere(n => n.props().type === 'submit').length).toEqual(1);
  });

  it('should have initial state', () => {
    const wrapper = renderComponent();
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  });

  it('should handleInputChange', () => {
    const wrapper = renderComponent();
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'email',
        value: 'theo.tester@example.com',
        type: 'input',
      }
    };

    // Call
    instance.handleInputChange(event);
    expect(wrapper.state('email')).toEqual('theo.tester@example.com');
  });
});
