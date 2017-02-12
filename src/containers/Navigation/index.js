import React from 'react';

import Entry from './Entry';


// Named export for separate access (e.g. for unit tests)
export const Navigation = () => {
/**
  * The main Navigation of the app. Renders multiple navigation entries.
  *
  * @function Navigation
  * @returns {Node} Component
  */

  return (
    <div>
      <nav>
        <ul>
          <Entry url="/">Home</Entry>
          <Entry url="/impressum">Impressum</Entry>
        </ul>
      </nav>
    </div>
  );
};


export default Navigation;
