/**
  * Pricing page
  *
  * @namespace Pricing
  */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import H1 from 'components/H1';
import FullHeightGrid from 'components/FullHeightGrid';

import Wrapper from './Wrapper';
import Package from './Package';

import { getLoggedIn, getUserID, getAuthToken } from 'containers/Auth/ducks/selectors';

import { purchaseSlots } from './ducks/actions';


export class PricingPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      redirect: false,
    });
  }

  handlePurchase = packageInfo => {
    const userInfo = { userID: this.props.userID, authToken: this.props.authToken };
    this.props.purchaseSlots(userInfo, packageInfo.amount);
  }

  redirect = () => {
    this.setState({ redirect: true });
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: '/pricing'}
      }} />;
    }

    return (
      <Wrapper>
        <H1>Slots upgraden</H1>
        <FullHeightGrid md={1 / 3}>
        <Package
          name="Kleines Paket"
          amount={5}
          price="4.99€"
          description="Das kleine Starterpaket"
          isLoggedIn={this.props.isLoggedIn}
          handlePurchase={this.handlePurchase}
          redirectClick={this.redirect}
        />
        </FullHeightGrid>
        <FullHeightGrid md={1 / 3}>
        <Package
          name="Mittleres Paket"
          amount={50}
          price="39.99€"
          description="Vorteilspreis"
          isLoggedIn={this.props.isLoggedIn}
          handlePurchase={this.handlePurchase}
          redirectClick={this.redirect}
        />
        </FullHeightGrid>
        <FullHeightGrid md={1 / 3}>
        <Package
          name="Großes Paket"
          amount={100}
          price="69.99€"
          description="Besonders günstig"
          isLoggedIn={this.props.isLoggedIn}
          handlePurchase={this.handlePurchase}
          redirectClick={this.redirect}
        />
        </FullHeightGrid>
        </Wrapper>
    );
  }
}

export const mapStateToProps = state => {
  return {
    isLoggedIn: getLoggedIn(state),
    userID: getUserID(state),
    authToken: getAuthToken(state),
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    purchaseSlots,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingPage);
