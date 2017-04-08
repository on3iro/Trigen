import React from 'react';

import Span from 'components/Span';
import Progress from './Progress';


const PasswordContainer = props => {
  return (
    <div>
      <label><strong>Passwort:</strong></label>
      <p>{props.password}</p>
      <Span warning error>
        Das Passwort wird 30 Sekunden lang angezeigt, damit Du es kopieren kannst!
      </Span>
      <Progress isInprogress={props.inProgress}/>
    </div>
  );
};

export default PasswordContainer;
