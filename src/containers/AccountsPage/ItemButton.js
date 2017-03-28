import styled from 'styled-components';

import Button from 'components/Button';


const getBGImage = props => {
  switch(props.mode) {
    case 'save':
      return `${props.theme.primary} url("src/img/icons/Icon_Button_Save.png") center/14px 14px`;
    case 'cancel':
      return `${props.theme.secondary} url("src/img/icons/Icon_Button_Abort.png") center/15px 15px`;
    case 'edit':
      return `${props.theme.primary} url("src/img/icons/Icon_Button_Edit.png") center/15px 15px`;
    case 'delete':
      return `${props.theme.secondary} url("src/img/icons/Icon_Button_Delete.png") center/11px 15px`;
    default:
      return `${props.theme.secondary} url("src/im/icons/Icon_Button_Abort.png") center/15px 15px`;
  }
};

export default styled(Button)`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: ${props => getBGImage(props)} no-repeat;
`;
