import React, { PropTypes } from 'react';

import Ul from 'components/Ul';
import ListItem from './ListItem';


const renderItems = (props) => {
  return props.accounts.map((account, i) => {
    return (
      <ListItem
        account={account}
        fakeID={account.fakeID}
        key={i}
      />
    );
  });
};

const List = props => {
  return (
    <Ul>
      {renderItems(props)}
    </Ul>
  );
};

List.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
};

export default List;
