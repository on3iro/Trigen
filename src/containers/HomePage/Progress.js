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
      sec: 60,
      percent: 100,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isInprogress) {
      clearInterval(this.interval);
      this.setState({
        sec: 60,
        percent: 100,
      })
    }else if(!this.props.isInprogress && nextProps.isInprogress) {
      this.showProgress();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showProgress() {
    this.interval = setInterval(() => {
      const newSec = this.state.sec - 0.01;
      const newPercent = ((newSec) * 100) / 60;
      this.setState({
        sec: newSec,
        percent: newPercent,
      })
    }, 10);
  }

  render() {
    return (
      <StyledLine percent={this.state.percent} strokeWidth="0.5" strokeColor={defaultTheme.main} />
    );
  }
}

export default Progress;
