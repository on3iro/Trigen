/**
  * Account-List page for a specific user
  *
  * @namespace AccountsPage
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    this.props.fetchAccounts();
  }

  addItem = () => {
    this.props.addAccount();

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
  // TODO
};

const mapStateToProps = (state) => {
  return {
    accounts: getAccounts(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addAccount, fetchAccounts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
