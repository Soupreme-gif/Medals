
import { Component } from 'react';
import Country from './components/Country';
import './App.css'

class App extends Component {

  state = {
    countries: [
      { id: 1, name: 'United States', goldMedalCount: 2 },
      { id: 2, name: 'China', goldMedalCount: 3 },
      { id: 3, name: 'Germany', goldMedalCount: 0 },
    ]
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
       />
      )}
    </div>
  );
 }
}

export default App;
