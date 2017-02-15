/**
  * Main Application component.
  *
  * @module App
  */

import React, { Component, PropTypes } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Content from './Content';


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
      <Wrapper>
        <Header />
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
