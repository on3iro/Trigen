import React from 'react';
import { shallow } from 'enzyme';

import ConnectedList, { List, RestyledUl } from '../List';
import ListItem from '../ListItem';


function setUp() {
  const props = {
    accounts: [
      {
        id: 0,
        fakeID: 'fakeID',
        username: 'ttester',
        domain: 'example.com',
      }
    ]
  };

  const enzymeWrapper = shallow(<List {...props} />);

  return {
    props, enzymeWrapper
  };
}

describe('<List />', () => {
  it('should render <RestyledUl />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(RestyledUl).length).toBe(1);
  });

  it('should render <ListItem />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ListItem).length).toBe(1);
  });
});
