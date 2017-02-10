import React, { PropTypes } from 'react';

import NavEntry from './navEntry';


// Named export for separate access (e.g. for unit tests)
export const Navigation = props => {
  return (
    <div>
      <nav>
        <ul>
          <NavEntry url="/">Home</NavEntry>
          <NavEntry url="/impressum">Impressum</NavEntry>
        </ul>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  // TODO
};

export default Navigation;
