import React, { Component, PropTypes } from 'react';

import Navigation from '../navigation';


export default class App extends Component {
  /**
   * Main App component
   * Wraps children
    */

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  // TODO
};
