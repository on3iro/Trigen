import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Named export for separate access (e.g. for unit tests)
export const Entry = props => {
/**
 * A single navigation entry. Consists of a list item and a react-router
 * <Link /> component.
 *
 * @function Entry
 * @param {Object} props - React props
 * @param {String} props.url - URL to link to
 * @param {String} props.children -  Link text
 * @returns {Node} Component
  */

  return (
     <li>
        <Link to={props.url} activeClassName="is-active">
            {props.children}
        </Link>
     </li>
  );
};

Entry.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Entry;
