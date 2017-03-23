/**
 * Account-List page for a specific user.
 * Initiates account fetching on access.
  *
  * @namespace AccountsPage
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

import { addAccount, fetchAccounts, filterAccounts } from './ducks/actions';
import { makeGetFilteredAccounts, getAccountFilter } from './ducks/selectors';
import FilterInput from './FilterInput';
import Button from './Button';
import Wrapper from './Wrapper';
import List from './List';


export class AccountsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAccounts(shortid.generate);
  }

  addItem = () => {
    /**
     * Generates an internal fakeID for a new account and adds that
     * account to the application state in edit mode.
     *
     * @method addItem
     * @returns {undefined}
      */

    const fakeID = shortid.generate();
    this.props.addAccount(fakeID);

    return undefined;
  }

  handleFilterChange = e => {
    this.props.filterAccounts(e.target.value);

    return undefined;
  }

  render() {
    return (
      <Wrapper>
        <FilterInput
          type="text"
          name="accountFilter"
          placeholder="Filter Accounts"
          onChange={this.handleFilterChange}
          value={this.props.accountFilter}
        />
        <Button onClick={this.addItem}>Add Account</Button>
        <List
          accounts={this.props.accounts}
        />
      </Wrapper>
    );
  }
}

AccountsPage.propTypes = {
  accountFilter: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.object),
  addAccount: PropTypes.func,
  fetchAccounts: PropTypes.func,
  filterAccounts: PropTypes.func,
};

const mapStateToProps = (state) => {
  const getFilteredAccounts = makeGetFilteredAccounts();

  return {
    accounts: getFilteredAccounts(state),
    accountFilter: getAccountFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addAccount,
    fetchAccounts,
    filterAccounts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
