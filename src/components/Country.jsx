import React, { Component } from 'react';

class Country extends Component {

    state = {
        name: this.props.country.name,
        goldMedalCount: this.props.country.goldMedalCount,
      }

    render() { 

        const {country, onIncrement, onDecrease} = this.props;

        return (

        <div>
            <div>
                <h1>{ country.name }</h1>
            </div>

            <div>
                <p>Gold Medals: { country.goldMedalCount } 
                <button className='gold' onClick={ () => onIncrement(country.id) }>Give Gold</button>

                {/* where this method of conditional rendering came from https://www.freecodecamp.org/news/react-conditional-rendering/ */}
               {country.goldMedalCount !== 0 && <button className='gold' onClick={ () => onDecrease(country.id) }>Remove Gold</button>}
                </p>
            </div>
        </div>);

    }
}
 
export default Country;
