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
  height: 23px;

  border-radius: 50%;

  background-color: ${props => props.primary ? props.theme.primary : props.theme.secondary};
  background-image: ${props => getBGImage(props)};
`;
