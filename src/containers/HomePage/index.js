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
  componentDidMount() {
    if(!this.props.accountsFetched) {
      this.props.fetchAccounts(shortid.generate);
    }
  }

   render() {
     return (
       <Wrapper>
         hallo
       </Wrapper>
     );
   }
}
         // <Autosuggest
           // suggestions={}
           // onSuggestionsFetchRequested={}
           // onSuggestionsClearRequested={}
           // getSuggestionValue={}
           // renderSuggestion={}
           // inputProps={}
         // />
       // </Wrapper>

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
