import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import Grid from 'grid-styled';

import { fetchAccounts } from 'containers/AccountsPage/ducks/actions';
import { getAccounts, getAccountListStatus } from 'containers/AccountsPage/ducks/selectors';
import { getUserID, getAuthToken } from 'containers/Auth/ducks/selectors';

import { generatePassword } from './ducks/actions';
import { getPassword, getProgress } from './ducks/selectors';

import Input from 'components/Input';
import Button from 'components/Button';
import LoadingSpinner from 'components/LoadingSpinner';

import PasswordContainer from './PasswordContainer';


export class PassGenForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      domain: '',
      username: '',
      masterPassword: '',
      generatedPassword: '',
    };
  }

  componentDidMount() {
    if(!this.props.accountListStatus.fetched) {
      this.props.fetchAccounts(this.props.userID, this.props.authToken, shortid.generate);
    }
  }

  // Field validation
  validate = () => {
    let errors = [];

    if(this.state.domain.length === 0) {
      errors = errors.concat('Domain is required!');
    }

    if(this.state.username.length === 0) {
      errors = errors.concat('Username is required!');
    }

    return errors;
  }

  // Submit handling
  handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = this.validate();

    if(validationErrors.length !== 0) {
      // TODO
    }

    const accountInfo = {
      domain: this.state.domain,
      username: this.state.username,
    };
    const userInfo = {
      userID: this.props.userID,
      authToken: this.props.authToken,
    };

    this.props.generatePassword(accountInfo, userInfo, this.state.masterPassword);
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
        <Grid md={1 / 2}>
          <strong>Domain:</strong> {suggestion.domain}
        </Grid>
        <Grid md={1 / 2}>
          <strong>Username:</strong> {suggestion.username}
        </Grid>
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

  // MasterPW
  onMasterPWChange = e => {
    this.setState({
      masterPassword: e.target.value,
    });
  }

  render() {
    const inputProps = {
      placeholder: 'Domain eingeben',
      value: this.state.domain,
      onChange: this.onDomainChange,
      type: 'search',
    };

    if(this.props.accountListStatus.isLoading) {
      return <LoadingSpinner />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
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
          type="text"
        />
        <Input
          placeholder="Masterpasswort eingeben"
          value={this.state.masterpassword}
          type="password"
          onChange={this.onMasterPWChange}
        />
        <Button submit>Generiere Passwort</Button>
        {
          this.props.password !== '' &&
            <PasswordContainer
              password={this.props.password}
              inProgress={this.props.inProgress}
            />
        }
      </form>
    );
  }
}

PassGenForm.propTypes = {
  accountListStatus: PropTypes.object,
  accounts: PropTypes.array,
  authToken: PropTypes.string,
  fetchAccounts: PropTypes.func,
  userID: PropTypes.number,
};

export const mapStateToProps = state => {
  return {
    accounts: getAccounts(state),
    accountListStatus: getAccountListStatus(state),
    userID: getUserID(state),
    authToken: getAuthToken(state),
    password: getPassword(state),
    inProgress: getProgress(state),
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAccounts,
    generatePassword,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PassGenForm);
