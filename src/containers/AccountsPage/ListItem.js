import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Li from 'components/Li';
import Input from './Input';
import Button from './Button';
import { editAccount } from './ducks/actions';


const DomainSpan = styled.span`
  margin-right: 10px;
`;
const UserNameSpan = styled.span``;

export class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  editItem = () => {
    this.props.editAccount(this.props.index, this.props.account);
  }

  render() {
    return (
      <Li>
        <Input type="checkbox" name="checkbox" />
        {
          this.props.account.edit
            ? (
              <span>
                <Input
                  type="text"
                  name="domain"
                  value={this.props.account.domain}
                  onChange={console.log('change')}
                />
                <Input
                  type="text"
                  name="username"
                  value={this.props.account.username}
                  onChange={console.log('change')}
                />
                <Button onClick={console.log('change')}>Save</Button>
                <Button warning onClick={console.log('change')}>Cancel</Button>
                </span>
            ) : (
                <span>
                <DomainSpan>{this.props.account.domain}</DomainSpan>
                <UserNameSpan>{this.props.account.username}</UserNameSpan>
                <Button onClick={this.editItem}>Edit</Button>
                <Button warning onClick={console.log('change')}>Delete</Button>
              </span>
            )
        }
      </Li>
    );
  }
}

ListItem.propTypes = {
  // TODO
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editAccount }, dispatch);
};

export default connect(null, mapDispatchToProps)(ListItem);
