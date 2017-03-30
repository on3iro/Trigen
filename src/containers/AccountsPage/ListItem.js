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

import Li from 'components/Li';
import Input from './Input';
import AccountControls from './AccountControls';

import {
  cancelEdit,
  deleteAccount,
  editAccount,
  handleAccountChange,
  saveAccount,
} from './ducks/actions';
import { makeGetEditedAccount } from './ducks/selectors';


export const RestyledLi = styled(Li)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 8px 0 8px 5px;

  width: 100%;
  height: 40px;
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
  }

  editItem = () => {
    this.props.editAccount(this.props.fakeID, this.props.account);
  }

  cancelEdit = () => {
    this.props.cancelEdit(this.props.fakeID);
  }

  deleteItem = () => {
    this.props.deleteAccount(this.props.fakeID);
  }

  saveItem = () => {
    this.props.saveAccount(this.props.EditedAccount);
  }

  handleChange = (e) => {
    this.props.handleAccountChange(this.props.fakeID, e.target);
  }

  render() {
    let account = this.props.account;

    if(account.edit) {
      account = this.props.EditedAccount ? this.props.EditedAccount : account;
    }

    return (
      <RestyledLi>
        {
          account.edit
            ? ([
              <Grid lg={6 / 12}>
                <Input
                  key="domain"
                  name="domain"
                  onChange={this.handleChange}
                  placeholder="Domain"
                  type="text"
                  value={account.domain}
                />
              </Grid>,
              <Grid lg={4 / 12}>
                <Input
                  key="username"
                  name="username"
                  onChange={this.handleChange}
                  placeholder="username"
                  type="text"
                  value={account.username}
                />
              </Grid>
            ]) : ([
              <Grid lg={6 / 12}>
                <Span key="domain">{account.domain}</Span>
              </Grid>,
              <Grid lg={4 / 12}>
                <Span key="username">{account.username}</Span>
              </Grid>
              ])
        }
        <Grid lg={1 / 12}>
          <AccountControls
            edit={account.edit}
            save={this.saveItem}
            cancel={this.cancelEdit}
            editItem={this.editItem}
            delete={this.deleteItem}
          />
        </Grid>
      </RestyledLi>
    );
  }
}

ListItem.propTypes = {
  EditedAccount: PropTypes.object,
  account: PropTypes.object,
  cancelEdit: PropTypes.func,
  deleteAccount: PropTypes.func,
  editAccount: PropTypes.func,
  fakeID: PropTypes.string,
  handleAccountChange: PropTypes.func,
  saveAccount: PropTypes.func,
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProps) => {
    const getEditedAccount = makeGetEditedAccount();
    return {
      EditedAccount: getEditedAccount(state, ownProps),
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
    saveAccount,
  }, dispatch);
};

export default connect(makeMapStateToProps, mapDispatchToProps)(ListItem);
