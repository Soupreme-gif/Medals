import React, { Component } from 'react';

class Medal extends Component {

    render() { 
        const { country, medals, onIncrement, onDecrease } = this.props;
        return (
          <div>
            { medals.type } Medals: { country[medals.type] }
            <button className='gold' onClick={ () => onIncrement(country.id, medals.type) }>give</button>

            {/* where this method of conditional rendering came from https://www.freecodecamp.org/news/react-conditional-rendering/ */}
            {country[medals.type] !== 0 && <button className='gold' onClick={ () => onDecrease(country.id, medals.type) }>remove</button>}
          </div>
        );
      }
}
 
export default Medal;
