import React, { Component } from 'react';

class NewCountry extends Component {

    handlePrompt = () => {
    const countryName = prompt('Enter name of the new country');
    if (countryName && countryName.trim().length > 0) {
      this.props.onSubmission(countryName);
    }
  }

    render() { 
      return (
      <button className='country' onClick={ this.handlePrompt }>New Country</button>
      );
    }
}
 
export default NewCountry;
