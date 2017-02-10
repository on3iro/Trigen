import React from 'react';

import NavEntry from './navEntry';


// Named export for separate access (e.g. for unit tests)
export const Navigation = () => {
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
