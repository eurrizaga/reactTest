import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/progressBar'
class App extends Component {
  render() {
    return (
      <div className="App">
      <p> Progress bar</p>
        <ProgressBar percentage={65}/>
      </div>
    );
  }
}

export default App;
