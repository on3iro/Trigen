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

import { addAccount, fetchAccounts } from './ducks/actions';
import { getAccounts } from './ducks/selectors';
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

  render() {
    return (
      <Wrapper>
        <Button onClick={this.addItem}>Add Account</Button>
        <List
          accounts={this.props.accounts}
        />
      </Wrapper>
    );
  }
}

AccountsPage.propTypes = {
  fetchAccounts: PropTypes.func,
  addAccount: PropTypes.func,
  accounts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  return {
    accounts: getAccounts(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addAccount, fetchAccounts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
