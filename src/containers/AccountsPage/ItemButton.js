import styled from 'styled-components';

import Button from 'components/Button';

import EditSaveSprite from 'img/icons/Icon_Button_Edit-Save.png';
import AbortDelete from 'img/icons/Icon_Button_Abort-Delete.png';


const getBGImage = props => {
  switch(props.mode) {
    case 'save':
      return `${props.theme.primary} center/14px 14px`;
    case 'cancel':
      return `${props.theme.secondary} center/15px 15px`;
    case 'edit':
      return `${props.theme.primary} center/15px 15px`;
    case 'delete':
      return `${props.theme.secondary} center/11px 15px`;
    default:
      return `${props.theme.secondary} center/15px 15px`;
  }
};

export default styled(Button)`
  margin: 0 5px 0 0;
  width: 23px;
  height: 23px;

  border-radius: 50%;
  background: ${props => getBGImage(props)} no-repeat;
`;
