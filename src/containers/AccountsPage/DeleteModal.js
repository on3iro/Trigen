import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import Button from 'components/Button';
import H1 from 'components/H1';


const RestyledButton = styled(Button)`
  display: inline-block;

  width: 40%;
  margin: 20px 10px 10px 30px;
`;

const DeleteModal = props => {
  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(70, 70, 70, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '20%',
          left: '25%',
          width: '50%',
          height: '40%',
        }
      }}
      {...props}
    >
      <H1>Folgendes Konto wirklich löschen?</H1>
      <p><strong>Domain</strong>: {props.domain}</p>
      <p><strong>Username</strong>: {props.username}</p>
      <RestyledButton warning onClick={props.continueRequest}>Löschen</RestyledButton>
      <RestyledButton secondary onClick={props.cancelRequest}>Abbrechen</RestyledButton>
    </Modal>
  );
};

export default DeleteModal;
