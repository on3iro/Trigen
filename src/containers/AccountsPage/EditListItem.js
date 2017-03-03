import React from 'react';
import styled from 'styled-components';

import Li from 'components/Li';
import Input from './Input';
import Button from './Button';


const EditListItem = () => {
  return (
    <Li>
      <Input type="checkbox" name="checkbox" />
      <Input type="text" name="domain" />
      <Input type="text" name="username" />
      <Button onClick={() => console.log('Save')}>Save</Button>
      <Button warning onClick={() => console.log('Cancel')}>Cancel</Button>
    </Li>
  );
};

export default EditListItem;
