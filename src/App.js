
import { Component } from 'react';
import Country from './components/Country';
import './App.css'

class App extends Component {

  state = {
    countries: [
      { id: 1, name: 'United States', goldMedalCount: 1},
      { id: 2, name: 'China', goldMedalCount: 3},
      { id: 3, name: 'Germany', goldMedalCount: 0 },
    ]
  }

  handleIncrement = (countryId) => {

    const countriesCopy = [...this.state.countries];

    const idx = countriesCopy.findIndex((c) => c.id === countryId)

    countriesCopy[idx].goldMedalCount += 1;

    this.setState({countriesCopy:this.state.countries})

 }

 handleDecrease = (countryId) => {

  const countriesCopy = [...this.state.countries];

    const idx = countriesCopy.findIndex((c) => c.id === countryId)

    countriesCopy[idx].goldMedalCount -= 1;

    this.setState({countriesCopy:this.state.countries})

}

  render() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {this.state.countries.map(country =>
        <Country 
        key = { country.id }
        country = { country }
        onIncrement = { this.handleIncrement }
        onDecrease = { this.handleDecrease }
       />
      )}
    </div>
  );
 }
}

export default App;
