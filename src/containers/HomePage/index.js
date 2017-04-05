/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React, { PropTypes, Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

import { fetchAccounts } from 'containers/AccountsPage/ducks/actions';
import { getAccounts, getAccountStatus } from 'containers/AccountsPage/ducks/selectors';

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

  onSuggestionChange = (event, { newValue }) => {
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

  renderSuggestion = suggestion => {
    return (
      <div>
        {`${suggestion.domain} - ${suggestion.username}`}
      </div>
    );
  };

 render() {
   const inputProps = {
     placeholder: 'Domain eingeben',
     value: this.state.domain,
     onChange: this.onSuggestionChange,
   };

   return (
     <Wrapper>
       <Autosuggest
         suggestions={this.state.suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         getSuggestionValue={this.getSuggestionValue}
         renderSuggestion={this.renderSuggestion}
         inputProps={inputProps}
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
