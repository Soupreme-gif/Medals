import React, { Component } from 'react';

class Country extends Component {
    state = { 
        name: "Turkey",
        gold: 0,
     } 

     handleIncrement = () => {

        this.setState({ gold: this.state.gold + 1 })

     }

    render() { 
        return (
        <div>
            <div>
                <h1>{ this.state.name }</h1>
            </div>

            <div>
                <p>Gold Medals: { this.state.gold } <button onClick={ this.handleIncrement }>Give Gold</button></p>
            </div>
        </div>);
    }
}
 
export default Country;
