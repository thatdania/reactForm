import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App</h1>
        <p> Is thiz working? </p>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
