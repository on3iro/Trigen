import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';


const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return (
    inputLength === 0
      ? []
      : ['test', 'tanja', 'max'].filter(
        item => {
          const val = item.toLowerCase().includes(inputValue);
          return val;
        }
      )
  );
};
const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => {
  console.log(suggestion);
  return (
    <div>
      {suggestion}
    </div>
  );
};

class SuggestionInput extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  render() {
    const { value, suggestions } = this.state;

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={
          {
            placeholder: 'Domain eingeben',
            value,
            onChange: this.onChange
          }
        }
      />
    );
  }
}

export default SuggestionInput;
