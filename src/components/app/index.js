import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  /**
   * Main App component
   * Wraps children
    */

  render() {
    return (
      <div>
        Hello World
        {this.props.children}
      </div>
    )
  }
}
