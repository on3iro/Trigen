/**
  * Main Application component.
  *
  * @namespace App
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as authSelectors from 'containers/Auth/ducks/selectors';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Content from './Content';

import HomePage from 'containers/HomePage';
import Impressum from 'containers/ImpressumPage';
import Auth from 'containers/Auth';
import Logout from 'containers/Auth/Logout';
import Register from 'containers/Auth/Register';
import UserProfile from 'containers/Auth/UserProfile';

import ProtectedRoute from 'containers/Auth/ProtectedRoute';


export class App extends Component {
  /**
   * Main App component
   * Wraps children
   * @class App
   * @namespace App
   * @memberOf App
   * @param {Object} props - React props
   * @param {Object} props.children - Child Components
    */

  render() {
    return (
      <Wrapper>
        <Header isLoggedIn={this.props.isLoggedIn} />
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/impressum" component={Impressum} />
            <ProtectedRoute path="/profile" component={UserProfile} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Auth} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: authSelectors.getLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(App);
