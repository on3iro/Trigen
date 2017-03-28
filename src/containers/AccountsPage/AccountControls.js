import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ItemButton from './ItemButton';


const Wrapper = styled.div`
  display: inline-block;
  margin: 0;
`;

const AccountControls = props => {
  return (
    <Wrapper>
      {
        props.edit
          ? ([
              <ItemButton key="save" onClick={props.save} mode="save" />,
              <ItemButton key="cancel" warning onClick={props.cancel} mode="cancel" />
            ]) : ([
              <ItemButton key="edit" onClick={props.editItem} mode="edit" />,
              <ItemButton key="delete" warning onClick={props.delete} mode="delete" />
            ])
      }
    </Wrapper>
  );
}

export default AccountControls;
