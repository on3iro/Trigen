/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import styled from 'styled-components';

import { fetchAccounts } from 'containers/AccountsPage/ducks/actions';
import { getAccounts, getAccountStatus } from 'containers/AccountsPage/ducks/selectors';

import Input from 'components/Input';

import Wrapper from './Wrapper';


export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      domain: '',
      username: '',
    };
  }

  componentDidMount() {
    if(!this.props.accountsFetched) {
      this.props.fetchAccounts(shortid.generate);
    }
  }

  // Autosuggest input
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return (
      inputLength === 0
        ? []
        : this.props.accounts.filter(
          account => {
            const val = account.domain.toLowerCase().includes(inputValue);
            return val;
          }
        )
    );
  };

  getSuggestionValue = suggestion => suggestion.domain;

  onDomainChange = (event, { newValue }) => {
    this.setState({
      domain: newValue,
    });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  onSuggestionSelected = (e, { suggestion }) => {
    this.setState({
      username: suggestion.username
    });
  }

  renderSuggestion = suggestion => {
    return (
      <div>
        {`${suggestion.domain} - Username: ${suggestion.username}`}
      </div>
    );
  };

  // Username input
  onUsernameChange = e => {
    this.setState({
      username: e.target.value,
    });
  }

  clearUsername = () => {
    this.setState({ username: '' });
  }

  render() {
    const inputProps = {
      placeholder: 'Domain eingeben',
      value: this.state.domain,
      onChange: this.onDomainChange,
    };

    return (
      <Wrapper>
        <Input
          autoSuggest
          getSuggestionValue={this.getSuggestionValue}
          highlightFirstSuggestion={true}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          renderSuggestion={this.renderSuggestion}
          suggestions={this.state.suggestions}
        />
        <Input
          onFocus={this.clearUsername}
          placeholder="Username eingeben"
          value={this.state.username}
          onChange={this.onUsernameChange}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: getAccounts(state),
    accountsFetched: getAccountStatus(state).fetched,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAccounts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
