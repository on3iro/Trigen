/**
  * Pricing page
  *
  * @namespace Pricing
  */

import React from 'react';

import H1 from 'components/H1';
import FullHeightGrid from 'components/FullHeightGrid';

import Wrapper from './Wrapper';
import Package from './Package';


const Pricing = () => {
  return (
    <Wrapper>
      <H1>Slots upgraden</H1>
      <FullHeightGrid md={1 / 3}>
        <Package
          name="Kleines Paket"
          amount="5 Slots"
          price="4.99€"
          description="Das kleine Starterpaket"
        />
      </FullHeightGrid>
      <FullHeightGrid md={1 / 3}>
        <Package
          name="Mittleres Paket"
          amount="50 Slots"
          price="39.99€"
          description="Vorteilspreis"
        />
      </FullHeightGrid>
      <FullHeightGrid md={1 / 3}>
        <Package
          name="Großes Paket"
          amount="100 Slots"
          price="69.99€"
          description="Besonders günstig"
        />
      </FullHeightGrid>
    </Wrapper>
  );
};

export default Pricing;
