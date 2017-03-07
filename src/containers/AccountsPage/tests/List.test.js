import React from 'react';
import { shallow } from 'enzyme';

import ConnectedList, { List } from '../List';
import ListItem from '../ListItem';
import Ul from 'components/Ul';


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
  it('should render <Ul />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Ul).length).toBe(1);
  });

  it('should render <ListItem />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ListItem).length).toBe(1);
  });
});
