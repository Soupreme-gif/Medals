import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {

    getTotalMedals(country, medals) {

        let total = 0;

        medals.forEach(medal => { total += country[medal.type]; });

        return total;

      }

    render() { 

        const {country, onIncrement, onDecrease, medals, onDelete} = this.props;

        return (

        <div>
            <div>
                <h1>{ country.name }</h1>
                <p> Medal Total: { this.getTotalMedals(country, medals) } </p>
            </div>
            { medals.map(medals =>
          <Medal 
            key={ medals.id } 
            country={ country } 
            medals={ medals } 
            onIncrement={ onIncrement } 
            onDecrease={ onDecrease } />
        ) }
        <button className='delete' onClick={() => onDelete(country.id)}>Delete Country</button>
        </div>);

    }
}
 
export default Country;
