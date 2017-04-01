import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Input from '../Input';


describe('<Input />', () => {
  it('should render styled(Input)', () => {
    const enzymeWrapper = shallow(
      <ThemeProvider theme={{}}>
        <Input />
      </ThemeProvider>
    );
    expect(enzymeWrapper.name()).toBe('Styled(Input)');
  });
});
