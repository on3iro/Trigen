/**
 * A list component which should receive an array of accounts as prop.
 * A ListItem is rendered for each account inside that list.
  */

import React, { PropTypes } from 'react';

import Ul from 'components/Ul';
import ListItem from './ListItem';


const renderItems = (props) => {
/**
  * Renders a ListItem component for each entry inside props.accounts
  *
  * @function renderItems
  * @param {Object} props -- List.props
  * @return {Array} ListItems -- A list of ListItem components
  */

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

// Actual List component
export const List = props => {
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
