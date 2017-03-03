import React from 'react';

import Ul from 'components/Ul';
import EditListItem from './EditListItem';
import ShowListItem from './ShowListItem';


const List = () => {
  return (
    <Ul>
      <EditListItem />
      <ShowListItem />
    </Ul>
  );
};

export default List;
