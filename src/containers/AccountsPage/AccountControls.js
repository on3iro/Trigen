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
              <ItemButton key="save" primary onClick={props.save} />,
              <ItemButton key="cancel" warning onClick={props.cancel} />
            ]) : ([
              <ItemButton key="edit" primary onClick={props.editItem} />,
              <ItemButton key="delete" warning onClick={props.delete} />
            ])
      }
    </Wrapper>
  );
}

export default AccountControls;
