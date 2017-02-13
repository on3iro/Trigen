import React, { Component, PropTypes } from 'react';

import Navigation from '../Navigation';


export default class App extends Component {
  /**
   * Main App component
   * Wraps children
   *
   * @param {Object} props - React props
   * @param {Object} props.children - Child Components
    */

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
