
import { Component } from 'react';
import Country from './components/Country';
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
      {this.state.countries.map(country =>
        <Country 
        key = { country.id }
        country = { country }
        onIncrement = { this.handleIncrement }
        onDecrease = { this.handleDecrease }
        medals={ this.state.medals }
       />
      )}
    </div>
  );
 }
}

export default App;
