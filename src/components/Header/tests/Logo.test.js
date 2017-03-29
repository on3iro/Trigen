import React from 'react';
import { mount, render } from 'enzyme';

import Logo from '../Logo';

describe('<Logo />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<Logo />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<Logo />);
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = mount(<Logo id={id} />);
    expect(renderedComponent.find('a').prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<Logo attribute={'test'} />);
    expect(renderedComponent.find('a').prop('attribute')).toBeUndefined();
  });
});

