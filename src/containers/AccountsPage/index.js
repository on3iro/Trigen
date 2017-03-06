/**
  * Account-List page for a specific user
  *
  * @namespace AccountsPage
  */

import React from 'react';
import { connect } from 'react-redux';

import { getAccounts } from './ducks/selectors';
import Wrapper from './Wrapper';
import List from './List';


const AccountsPage = props => {
  console.log(props.accounts);
  return (
    <Wrapper>
      <List
        accounts={props.accounts}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: getAccounts(state),
  };
}

export default connect(mapStateToProps, null)(AccountsPage);
