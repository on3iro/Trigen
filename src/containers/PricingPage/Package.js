import React, { Component } from 'react';
import styled from 'styled-components';

import H2 from 'components/H2';
import Button from 'components/Button';

import PurchaseModal from './PurchaseModal';


export const Wrapper = styled.div`
  margin: 0 10px;
  padding: 10px 15px;
  width: 420px;
  height: 600px;

  border: 1px solid ${props => props.theme.outlines};

  background: ${props => props.theme.border};

  @media (max-width: 1400px) {
    width: 230px;
    height: 360px;
  }
`;

export const InnerWrapper = styled.div`
  position: relative;

  margin: 10px 0 0 0;
  padding: 10px;
  width: 100%;
  height: 480px;

  background: ${props => props.theme.noneWhite};

  @media (max-width: 1400px) {
    height: 270px;
  }
`;

export const P = styled.p`
  margin: 12% 0 0 0;
`;

export const RestyledButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 348px;


  @media (max-width: 1400px) {
    bottom: 5px;
    left: 10px;
    width: 178px;
  }
`;

export const RestyledH2 = styled(H2)`
  margin: 15px auto;

  @media (max-width: 1020px) {
    font-size: 0.99rem;
  }
`;

export class Package extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasModalIsOpen: false,
    };
  }

  openPurchaseModal = () => {
    this.setState({ purchaseModalIsOpen: true });
  }

  closePurchaseModal = () => {
    this.setState({ purchaseModalIsOpen: false });
  }

  continuePurchase = packageInfo => {
    this.props.handlePurchase(packageInfo);
    this.closePurchaseModal();
  }

  render() {
    const packageInfo = {
      amount: this.props.amount,
      price: this.props.price,
      name: this.props.name,
    };

    return (
      <Wrapper>
        <PurchaseModal
          isOpen={this.state.purchaseModalIsOpen}
          continueRequest={() => this.continuePurchase(packageInfo)}
          cancelRequest={this.closePurchaseModal}
          contentLabel="Paket kaufen"
          name={this.props.name}
          amount={this.props.amount}
          price={this.props.price}
        />
        <RestyledH2>{this.props.name}</RestyledH2>
        <InnerWrapper>
          <P>{this.props.amount} Slots</P>
          <P>{this.props.price}</P>
          <P>{this.props.description}</P>
          {
            this.props.isLoggedIn
              ? <RestyledButton onClick={this.openPurchaseModal} primary>Jetzt kaufen</RestyledButton>
              : <RestyledButton onClick={this.props.redirectClick} warning>Anmelden zum Kaufen</RestyledButton>
          }
        </InnerWrapper>
        </Wrapper>
    );
  }
}

export default Package;
