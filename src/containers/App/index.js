/**
  * Main Application component.
  *
  * @namespace App
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Grid from 'grid-styled';

import * as authSelectors from 'containers/Auth/ducks/selectors';

import DefaultTheme from 'themes/default';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Content from './Content';

import AGBPage from 'containers/AGBPage';
import AccountsPage from 'containers/AccountsPage';
import Auth from 'containers/Auth';
import FAQPage from 'containers/FAQPage';
import HomePage from 'containers/HomePage';
import Impressum from 'containers/ImpressumPage';
import Logout from 'containers/Auth/Logout';
import PricingPage from 'containers/PricingPage';
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
      <Router>
        <ThemeProvider theme={DefaultTheme}>
          <Wrapper>
            <Grid>
              <Header isLoggedIn={this.props.isLoggedIn} />
              <Content>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/impressum" component={Impressum} />
                  <Route path="/agb" component={AGBPage} />
                  <Route path="/faq" component={FAQPage} />
                  <Route path="/pricing" component={PricingPage} />
                  <ProtectedRoute path="/accounts" component={AccountsPage} />
                  <ProtectedRoute path="/profile" component={UserProfile} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Auth} />
                  <Route path="/logout" component={Logout} />
                </Switch>
              </Content>
              <Footer />
          </Grid>
        </Wrapper>
      </ThemeProvider>
    </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: authSelectors.getLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(App);
