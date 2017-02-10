import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Named export for separate access (e.g. for unit tests)
export const NavEntry = props => {
  return (
     <li>
        <Link to={props.url} activeClassName="is-active">
            {props.children}
        </Link>
     </li>
  );
};

NavEntry.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavEntry;
