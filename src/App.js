
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

  handleIncrement = (countryId) => {

    const countries = this.state.countries

    for (const c in countries)
    {
      console.log(countryId)
      console.log(c.id)
       if(c.id === countryId)
       {

        console.log("this check went off")
         this.setState({goldMedalCount: c.goldMedalCount + 1})
       }
    }

    this.setState({countries:countries})
    
 }

 handleDecrement = (countryId) => {

  this.setState({ goldMedalCount: this.goldMedalCount - 1 })

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
