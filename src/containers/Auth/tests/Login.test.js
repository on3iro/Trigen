import React from 'react';
import { shallow } from 'enzyme';

import StyledLink from 'components/StyledLink';

import Wrapper from '../Wrapper';
import { Login } from '../Login';
import LoginForm from '../LoginForm';


const renderComponent = newProps => {
  const props = {
    loginSubmit: jest.fn(),
    ...newProps,
  };

  const renderedWrapper = shallow(<Login {...props} />);

  return {
    props,
    renderedWrapper,
  };
};

describe('<Login />', () => {
  it('should render <Wrapper />', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Wrapper).length).toMatchSnapshot();
  });

  it('should render <LoginForm />', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(LoginForm).length).toMatchSnapshot();
  });

  it('should render <StyledLink />', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(StyledLink).length).toMatchSnapshot();
  });

  it('should call loginSubmit() on handleSubmit', () => {
    const { renderedWrapper, props } = renderComponent();

    renderedWrapper.instance().handleSubmit('test');

    expect(props.loginSubmit).toHaveBeenCalledWith('test');
  });
});
