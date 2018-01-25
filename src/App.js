import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name:'Max', age:'28'},
      { name:'Marco', age:'26'},
      {name:'Dania', age:'23'}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was CLICKED!')
    this.setState({
      persons: [
        { name: newName, age:'31'},
        { name:'Marco', age:'26'},
        {name:'Dania', age:'23'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App</h1>
        <p> Is thiz working? </p>
        <button onClick={() => this.switchNameHandler('Hillies')}> Switch Name </button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Moo!')}> Hobby: Youtube </Person>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
