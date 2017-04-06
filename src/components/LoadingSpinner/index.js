import React from 'react';

import Img from 'components/Img';
import spinnerImg from 'img/spinner_ring.gif';


const LoadingSpinner = () => {
  return (
    <Img src={spinnerImg} alt="loading"/>
  );
};

export default LoadingSpinner;
