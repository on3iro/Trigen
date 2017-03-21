import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import Wrapper from '../Wrapper';
import { Register } from '../Register';
import RegisterForm from '../RegisterForm';


const renderWrapper = newProps => {
  const props = {
    registerSubmit: jest.fn(),
    location: {
      state: 'test'
    },
    isLoggedIn: false,
    ...newProps,
  };

  const renderedWrapper = shallow(<Register {...props} />);

  return {
    props,
    renderedWrapper,
  };
}

describe('<Register />', () => {
  it('should render <Wrapper />', () => {
    const { renderedWrapper } = renderWrapper();
    expect(renderedWrapper.find(Wrapper).length).toMatchSnapshot();
  });

  it('should render <RegisterForm />', () => {
    const { renderedWrapper } = renderWrapper();
    expect(renderedWrapper.find(RegisterForm).length).toMatchSnapshot();
  });

  it('should render <Redirect /> if user is logged in', () => {
    const { renderedWrapper } = renderWrapper({ isLoggedIn: true });
    expect(renderedWrapper.find(Redirect).length).toMatchSnapshot();
  });

  it('should call registerSubmit() onSubmit', () => {
    const { renderedWrapper, props } = renderWrapper();

    renderedWrapper.instance().handleSubmit('test');

    expect(props.registerSubmit).toHaveBeenCalledWith('test');
  });
});
