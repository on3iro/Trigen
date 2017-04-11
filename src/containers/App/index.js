/**
  * Main Application component.
  *
  * @namespace App
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Grid from 'grid-styled';

import * as authSelectors from 'containers/Auth/ducks/selectors';
import { getLocation } from './ducks/selectors';

import DefaultTheme from 'themes/default';

import Header from 'components/Header';
import Footer from 'components/Footer';
import FullHeightGrid from 'components/FullHeightGrid';

import Content from './Content';

import AGBPage from 'containers/AGBPage';
import AccountsPage from 'containers/AccountsPage';
import FAQPage from 'containers/FAQPage';
import GlobalMessage from 'containers/GlobalMessage';
import PasswordGenerator from 'containers/PasswordGenerator';
import Impressum from 'containers/ImpressumPage';
import LoginPage from 'containers/LoginPage';
import Logout from 'containers/Auth/Logout';
import PricingPage from 'containers/PricingPage';
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
      <Router history={this.props.history}>
        <ThemeProvider theme={DefaultTheme}>
          <Grid md={6 / 6}>
            <Header isLoggedIn={this.props.isLoggedIn} routerLocation={this.props.routerLocation} />
            <Grid md={1 / 8 } lg={1 / 6} />
            <FullHeightGrid md={6 / 8}>
              <GlobalMessage />
              <Content>
                <Switch>
                  <Route exact path="/" render={() => ( <Redirect to="/home" />)} />
                  <ProtectedRoute path="/home" component={PasswordGenerator} />
                  <Route path="/impressum" component={Impressum} />
                  <Route path="/agb" component={AGBPage} />
                  <Route path="/faq" component={FAQPage} />
                  <Route path="/pricing" component={PricingPage} />
                  <ProtectedRoute path="/accounts" component={AccountsPage} />
                  <Route path="/register" component={LoginPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/logout" component={Logout} />
                </Switch>
              </Content>
            </FullHeightGrid>
            <Grid md={1 / 8} lg={1 / 6} />
            <Footer />
          </Grid>
        </ThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  routerLocation: PropTypes.object,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: authSelectors.getLoggedIn(state),
    routerLocation: getLocation(state),
  };
};

export default connect(mapStateToProps, null)(App);
