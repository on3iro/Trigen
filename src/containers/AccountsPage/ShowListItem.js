import React from 'react';
import styled from 'styled-components';

import Li from 'components/Li';
import Input from './Input';
import Button from './Button';


const ShowListItem = () => {
  return (
    <Li>
      <Input type="checkbox" name="checkbox" />
      <label name="domain">placholder domain</label>
      <label name="username">placeholder username</label>
      <Button onClick={() => console.log('Edit mode')}>Edit</Button>
      <Button warning onClick={() => console.log('Delete')}>Delete</Button>
    </Li>
  );
};

export default ShowListItem;
