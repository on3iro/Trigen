import React from 'react';
import { shallow } from 'enzyme';

import Input from 'components/Input';
import Span from 'components/Span';

import RenderField from '../RenderField';


const renderComponent = newProps => {
  const props = {
    input: {},
    label: 'email',
    type: 'text',
    meta: {
      touched: false,
      error: false,
    },
    ...newProps,
  };

  const renderedWrapper = shallow(<RenderField {...props} />);

  return {
    props,
    renderedWrapper,
  };
};

describe('<RenderField />', () => {
  it('should render an <Input />', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Input).length).toMatchSnapshot();
  });

  it('should render no <Span /> if it has not been touched or errored', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Span).length).toMatchSnapshot();
  });

  it('should render <Span /> when has been touched and errored', () => {
    const { renderedWrapper, props } = renderComponent({
      meta: {
        touched: true,
        error: true,
      }
    });
    expect(renderedWrapper.find(Span).length).toMatchSnapshot();
  });
});
