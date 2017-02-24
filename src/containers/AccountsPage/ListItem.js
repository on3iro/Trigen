import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';


export const StyledLi = styled.li`
`;

const ListItem = () => {
  return (
    <StyledLi>
      <Input type="checkbox" name="checkbox" />
      <Input type="text" name="domain" />
      <Input type="text" name="username" />
      <Button onClick={() => console.log('Save')}>Save</Button>
      <Button warning onClick={() => console.log('Delete')}>Delete</Button>
    </StyledLi>
  );
};

export default ListItem;
