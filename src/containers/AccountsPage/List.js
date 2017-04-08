/**
 * A list component which should receive an array of accounts as prop.
 * A ListItem is rendered for each account inside that list.
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Ul from 'components/Ul';
import ListItem from './ListItem';


export const RestyledUl = styled(Ul)`
  width: 100%;
  height: 70%;
  padding: 0;

  overflow: auto;

  li:nth-of-type(odd) {
    background: ${props => props.theme.border};
  }
`;

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
    <RestyledUl>
      {renderItems(props)}
    </RestyledUl>
  );
};

List.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
};

export default List;
