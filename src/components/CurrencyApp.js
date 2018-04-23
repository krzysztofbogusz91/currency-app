import React, { Component } from 'react';
import PropTypes from 'prop-types';

// <ul>
//     <li>Current buy and sell tab with currencies</li>
//     <li>Custom currency Y search with X last buy and sell options list</li>
//     <li>Current Time</li>
// </ul>

const propTypes = {
    
};


class CurrencyApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>NBP currency Aplication</h1>
                </header>
                <body>
                 <h2>BODY</h2>
                </body>
                <footer>
                    <div className="text-right">timmer: 10:45:22</div>
                </footer>  
            </div>
        );
    }
}


CurrencyApp.propTypes = propTypes;


export default CurrencyApp;
