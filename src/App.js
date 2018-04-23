import React, { Component } from 'react';
import './App.css';
import CurrencyApp from './components/CurrencyApp';



class App extends Component {
  render() {
    return (
      <div className="container">
        <CurrencyApp />
      </div>
    );
  }
}

export default App;
