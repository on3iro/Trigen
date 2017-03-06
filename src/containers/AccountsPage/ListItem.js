import React from 'react';
import styled from 'styled-components';

import Li from 'components/Li';
import Input from './Input';
import Button from './Button';


const DomainSpan = styled.span`
  margin-right: 10px;
`;
const UserNameSpan = styled.span``;

const ListItem = props => {
  return (
    <Li>
      <Input type="checkbox" name="checkbox" />
      {
        props.edit
          ? (
            <span>
              <Input type="text" name="domain" value={props.account.domain} />
              <Input type="text" name="username" value={props.account.username} />
              <Button onClick={props.saveItem}>Save</Button>
              <Button warning onClick={props.cancelItemEditing}>Cancel</Button>
            </span>
          ) : (
            <span>
              <DomainSpan>{props.account.domain}</DomainSpan>
              <UserNameSpan>{props.account.username}</UserNameSpan>
              <Button onClick={props.editItem}>Edit</Button>
              <Button warning onClick={props.deleteItem}>Delete</Button>
            </span>
          )
      }
    </Li>
  );
};

export default ListItem;
