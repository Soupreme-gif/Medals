import React, { Component } from 'react';

class Country extends Component {

    state = {
        name: this.props.country.name,
        goldMedalCount: this.props.country.goldMedalCount,
      }

      handleIncrement = () => {

        this.setState({ goldMedalCount: this.state.goldMedalCount + 1 })

     }

     handleDecrease = () => {

        this.setState({ goldMedalCount: this.state.goldMedalCount - 1 })

     }

    render() { 

        return (
        <div>
            <div>
                <h1>{ this.state.name }</h1>
            </div>

            <div>
                <p>Gold Medals: { this.state.goldMedalCount } 
                <button className='gold' onClick={ this.handleIncrement }>Give Gold</button>

                {/* where this method of conditional rendering came from https://www.freecodecamp.org/news/react-conditional-rendering/ */}
               {this.state.goldMedalCount !== 0 && <button className='gold' onClick={ this.handleDecrease }>Remove Gold</button>}
                </p>
            </div>
        </div>);
    }
}
 
export default Country;
