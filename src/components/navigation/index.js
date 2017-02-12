import React from 'react';

import NavEntry from './navEntry';


// Named export for separate access (e.g. for unit tests)
export const Navigation = () => {
/**
  * The main Navigation of the app. Renders multiple navigation entries.
  *
  * @function Navigation
  * @returns Component
  */

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
};


export default Navigation;
