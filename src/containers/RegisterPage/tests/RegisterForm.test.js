import React from 'react';
import { shallow } from 'enzyme';

import H1 from 'components/H1';
import Button from 'components/Button';
import Input from 'components/Input';
import RegisterForm from '../RegisterForm';


const renderComponent = () => shallow(<RegisterForm />);

describe('<RegisterForm />', () => {
  it('should render <form>', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render <H1>', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(H1).length).toEqual(1);
  });

  it('should render 3x <Input />', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Input).length).toEqual(3);
  });

  it('Should render <Button />', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('should have default state', () => {
    const wrapper = renderComponent();
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('confirm')).toEqual('');
  });

  it('should handleInputChange', () => {
    const wrapper = renderComponent();
    const event = {
      target: {
        type: 'input',
        value: 'theo.tester@example.com',
        name: 'email'
      }
    };

    // Simulate change
    wrapper.find(Input).findWhere(n => n.props().name === 'email').simulate('change', event);
    expect(wrapper.state('email')).toEqual('theo.tester@example.com');
  });
});
