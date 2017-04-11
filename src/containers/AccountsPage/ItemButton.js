import styled from 'styled-components';

import Button from 'components/Button';

import EditSaveSprite from 'img/icons/Icon_Button_Edit-Save.png';
import AbortDelete from 'img/icons/Icon_Button_Abort-Delete.png';


const getBGImage = props => {
  return `url(${props.primary ? EditSaveSprite : AbortDelete})`;
};

export default styled(Button)`
  margin: 0 5px 0 0;
  width: 23px;
  min-height: 23px;
  height: 23px;

  border-radius: 50%;

  background-color: ${props => props.warning ? props.theme.warning : props.theme.primary};
  background-image: ${props => getBGImage(props)};

  &.save {
    background-size: 32px;
    background-position: -14px 4px;
  }

  &.cancel {
    background-size: 30px;
    background-position: 5px 4px;
  }

  &.edit {
    background-size: 30px;
    background-position: 5px 4px;
  }

  &.delete {
    background-size: 32px;
    background-position: -15px;
  }
`;
