import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import FilterInput from '../FilterInput';
import Input from '../Input';


describe('<FilterInput />', () => {
  it('should render Styled(Input)', () => {
    const enzymeWrapper = shallow(
      <ThemeProvider theme={{}}>
        <FilterInput />
      </ThemeProvider>
    );
    expect(enzymeWrapper.name()).toBe('Styled(Input)');
  });
});
