/**
  * A ListItem component which is connected to the application store.
  * Can be edited, canceld, saved and deleted and also has a changeHandler attached
  * to the respective input fields.
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Grid from 'grid-styled';

import {
  cancelEdit,
  deleteAccount,
  editAccount,
  handleAccountChange,
  saveNewAccount,
  updateAccount,
} from './ducks/actions';
import { getUserID, getAuthToken } from 'containers/Auth/ducks/selectors';
import {
  makeGetEditedAccount,
  makeGetAccountStatusByFakeID,
} from './ducks/selectors';

import Li from 'components/Li';
import LoadingSpinner from 'components/LoadingSpinner';

import Input from './Input';
import AccountControls from './AccountControls';
import DeleteModal from './DeleteModal';


export const RestyledLi = styled(Li)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;

  width: 100%;
  height: 50px;
`;

export const Span = styled.span`
  display: inline-block;
  width: 100%;
  padding-left: 5px;
  overflow: hidden;
`;

export class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteModalIsOpen: false,
      cancelModalIsOpen: false,
    };
  }

  // Item editing
  editItem = () => {
    this.props.editAccount(this.props.fakeID, this.props.account);
  }

  cancelEdit = () => {
    this.props.cancelEdit(this.props.fakeID);
  }

  saveItem = () => {
    if(this.props.EditedAccount.new) {
      this.props.saveNewAccount(this.props.userID, this.props.authToken, this.props.EditedAccount);
    }else {
      this.props.updateAccount(this.props.userID, this.props.authToken, this.props.EditedAccount);
    }
  }

  handleChange = (e) => {
    this.props.handleAccountChange(this.props.fakeID, e.target);
  }

  // Item deletion
  openDeleteModal = () => {
    this.setState({deleteModalIsOpen: true});
  }

  closeDeleteModal = () => {
    this.setState({deleteModalIsOpen: false});
  }

  continueDelete = account => {
    const config = {
      userID: this.props.userID,
      authToken: this.props.authToken,
      accountID: account.id,
      fakeID: this.props.fakeID,
    };
    this.props.deleteAccount(config);
    this.closeDeleteModal();
  }

  render() {
    let account = this.props.account;

    if(account.edit) {
      account = this.props.EditedAccount ? this.props.EditedAccount : account;
    }

    return (
      <RestyledLi>
        <DeleteModal
          isOpen={this.state.deleteModalIsOpen}
          continueRequest={() => this.continueDelete(account)}
          cancelRequest={this.closeDeleteModal}
          contentLabel="Delete Account Modal"
          domain={account.domain}
          username={account.username}
        />
        {
          account.edit
            ? ([
              <Grid key="domain" md={6 / 12}>
                <Input
                  name="domain"
                  onChange={this.handleChange}
                  placeholder="Domain"
                  type="text"
                  value={account.domain}
                />
              </Grid>,
              <Grid key="user" md={4 / 12}>
                <Input
                  name="username"
                  onChange={this.handleChange}
                  placeholder="username"
                  type="text"
                  value={account.username}
                />
              </Grid>
            ]) : ([
              <Grid key="domain" md={6 / 12}>
                <Span key="domain">{account.domain}</Span>
              </Grid>,
              <Grid key="user" md={4 / 12}>
                <Span key="username">{account.username}</Span>
              </Grid>
            ])
        }
        <Grid md={1 / 12}>
          {
            this.props.accountStatus.isLoading
              ? <LoadingSpinner controls />
              : <AccountControls
                  edit={account.edit}
                  save={this.saveItem}
                  cancel={this.cancelEdit}
                  editItem={this.editItem}
                  delete={this.openDeleteModal}
                />

          }
        </Grid>
      </RestyledLi>
    );
  }
}

ListItem.propTypes = {
  EditedAccount: PropTypes.object,
  account: PropTypes.object,
  accountStatus: PropTypes.object,
  authToken: PropTypes.string,
  cancelEdit: PropTypes.func,
  deleteAccount: PropTypes.func,
  editAccount: PropTypes.func,
  fakeID: PropTypes.string,
  getAuthToken: PropTypes.func,
  getUserID: PropTypes.func,
  handleAccountChange: PropTypes.func,
  saveAccount: PropTypes.func,
  saveNewAccount: PropTypes.func,
  updateAccount: PropTypes.func,
  userID: PropTypes.number,
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProps) => {
    const getEditedAccount = makeGetEditedAccount();
    const getAccountStatusByFakeID = makeGetAccountStatusByFakeID();

    return {
      EditedAccount: getEditedAccount(state, ownProps),
      userID: getUserID(state),
      authToken: getAuthToken(state),
      accountStatus: getAccountStatusByFakeID(state, ownProps),
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cancelEdit,
    deleteAccount,
    editAccount,
    handleAccountChange,
    saveNewAccount,
    updateAccount,
  }, dispatch);
};

export default connect(makeMapStateToProps, mapDispatchToProps)(ListItem);
