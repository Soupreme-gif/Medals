
import { Component } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import './App.css'

class App extends Component {

  state = {
    countries: [
      { id: 1, name: 'United States', gold: 1, silver: 2, bronze: 1},
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 3, bronze: 1  },
    ],
    medals: [
      { id: 1, type: 'gold' },
      { id: 2, type: 'silver' },
      { id: 3, type: 'bronze' },
    ]
  }

  handleAdd = (name) => {

    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const countriesCopy = [...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0});
    this.setState({ countries: countriesCopy });
    
    }

  handleDelete = (countryId) => {
    const countries = this.state.countries.filter(c => c.id !== countryId);
  this.setState({ countries:countries });
  }

  handleIncrement = (countryId, medalType) => {

    const countryCopy = [ ...this.state.countries ];

    const idx = countryCopy.findIndex(c => c.id === countryId);

    countryCopy[idx][medalType] += 1;

    this.setState({ countryCopy: this.state.countries });

  }

 handleDecrease = (countryId, medalType) => {

  const countryCopy = [ ...this.state.countries ];

  const idx = countryCopy.findIndex(c => c.id === countryId);

  countryCopy[idx][medalType] -= 1;

  this.setState({ countryCopy: this.state.countries });

}

getAllMedalsTotal() {

  let total = 0;

  this.state.medals.forEach(medal => { total += this.state.countries.reduce((a, b) => a + b[medal.type], 0); });

  return total;
}

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <div>Olympic Medals: {this.getAllMedalsTotal()}</div>
      </header>
      <NewCountry onSubmission={ this.handleAdd } />
      {this.state.countries.map(country =>
        <Country 
        key = { country.id }
        country = { country }
        onIncrement = { this.handleIncrement }
        onDecrease = { this.handleDecrease }
        onDelete = { this.handleDelete }
        medals={ this.state.medals }
       />
      )}
    </div>
  );
 }
}

export default App;
