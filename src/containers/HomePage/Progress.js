import React, { Component } from 'react';
import { Line } from 'rc-progress';
import styled from 'styled-components';

import defaultTheme from 'themes/default';


const StyledLine = styled(Line)`
  width: 30%;
`;

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 30,
      percent: 100,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newSec = this.state.sec - 0.01;
      const newPercent = (newSec) * 100 / 30;
      this.setState({
        sec: newSec,
        percent: newPercent,
      })
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <StyledLine percent={this.state.percent} strokeWidth="0.5" strokeColor={defaultTheme.main} />
    );
  }
}

export default Progress;
