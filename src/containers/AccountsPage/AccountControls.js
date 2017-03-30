import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ItemButton from './ItemButton';


const Wrapper = styled.div`
  display: inline-block;
  margin: 5px 0 0 0;
`;

const AccountControls = props => {
  return (
    <Wrapper>
      {
        props.edit
          ? ([
              <ItemButton className="save" key="save" primary onClick={props.save} />,
              <ItemButton className="cancel" key="cancel" warning onClick={props.cancel} />
            ]) : ([
              <ItemButton className="edit" key="edit" primary onClick={props.editItem} />,
              <ItemButton className="delete" key="delete" warning onClick={props.delete} />
            ])
      }
    </Wrapper>
  );
}

export default AccountControls;
