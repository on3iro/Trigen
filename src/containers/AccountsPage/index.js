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
import Grid from 'grid-styled';
import styled from 'styled-components';

import H1 from 'components/H1';
import Span from 'components/Span';

import { getMaxAccounts } from 'containers/Auth/ducks/selectors';

import { addAccount, fetchAccounts, filterAccounts } from './ducks/actions';
import {
  makeGetFilteredAccounts,
  getAccountFilter,
  getAccountCount,
  getAccountStatus,
} from './ducks/selectors';
import FilterInput from './FilterInput';
import AddAccountButton from './AddAccountButton';
import BuySlotsButton from './BuySlotsButton';
import List from './List';


const ControlWrapper = styled.div``;

export class AccountsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.accountsFetched) {
      this.props.fetchAccounts(shortid.generate);
    }
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
      <Grid md={1 / 1}>
        <Grid md={6 / 6}>
          <H1>Nutzerkonten</H1>
        </Grid>
        <ControlWrapper>
          <Grid md={3 / 12}>
            {
              this.props.accountCount >= this.props.maxAccounts
                ? <BuySlotsButton
                    to="/pricing"
                    warning onClick={() => {}}
                  >
                    Slots erwerben
                  </BuySlotsButton>
                : <AddAccountButton
                    onClick={this.addItem}
                  >
                    Account hinzufügen
                  </AddAccountButton>
            }
          </Grid>
          <Grid md={1 / 12} />
          <Grid md={2 / 12}>
            <Span light>Slots: {this.props.accountCount} / {this.props.maxAccounts}</Span>
          </Grid>
          <Grid md={6 / 12}>
            <FilterInput
              type="text"
              name="accountFilter"
              placeholder="Zum filtern mit Schreiben beginnen"
              onChange={this.handleFilterChange}
              value={this.props.accountFilter}
            />
          </Grid>
        </ControlWrapper>
        <List
          accounts={this.props.accounts}
        />
      </Grid>
    );
  }
}

AccountsPage.propTypes = {
  accountFilter: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.object),
  accountCount: PropTypes.number,
  maxAccounts: PropTypes.number,
  addAccount: PropTypes.func,
  fetchAccounts: PropTypes.func,
  filterAccounts: PropTypes.func,
};

const mapStateToProps = (state) => {
  const getFilteredAccounts = makeGetFilteredAccounts();

  return {
    accounts: getFilteredAccounts(state),
    accountFilter: getAccountFilter(state),
    accountCount: getAccountCount(state),
    maxAccounts: getMaxAccounts(state),
    accountsFetched: getAccountStatus(state).fetched,
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
