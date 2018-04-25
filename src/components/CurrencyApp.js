import React, { Component } from 'react';
import data from '../api/nbp_tab'

// <ul>
//     <li>Current buy and sell tab with currencies</li>
//     <li>Custom currency Y search with X last buy and sell options list</li>
//     <li>Current Time</li>
// </ul>

class CurrencyApp extends Component {
    constructor() {
       super()
       this.state = {
           list: []
       }
    }

    componentDidMount() {
        (async () => {
            const list = await data();
            this.setState ({ list })
            console.log(this.state.list)
        })()
    }
    
    render() {
        return (
            <div>
                <header>
                    <h1>NBP currency Aplication</h1>
                </header>
                <div>

                </div>
                <footer>
                    <div className="text-right">timmer: 10:45:22</div>
                </footer>  
            </div>
        );
    }
}

export default CurrencyApp;
