import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App</h1>
        <p> Is thiz working? </p>
        <Person name="Marco" age="26"/>
        <Person name="Dania" age="23"> Hobby: Youtube </Person>
        <Person name="Papi" age="60"/>
      </div>
    );
  }
}

export default App;
