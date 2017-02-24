import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';


export const StyledUl = styled.ul`
  list-style: none;
`;

const List = () => {
  return (
    <StyledUl>
      <ListItem />
    </StyledUl>
  );
};

export default List;
