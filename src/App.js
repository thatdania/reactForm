import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name:'Max', age:'28'},
      { name:'Marco', age:'26'},
      {name:'Dania', age:'23'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'newName', age:'31'},
        { name:'Marco', age:'26'},
        {name:'Dania', age:'27'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age:'31'},
        { name: event.target.value, age:'26'},
        {name:'Dania', age:'23'}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer'
    }

    let persons = null;

    if( this.state.showPersons ){
      persons = (<div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Moo!')}
          change={this.nameChangedHandler}> Hobby: Youtube </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>)
    }

    return (
      <div className="App">
        <h1> React Form Edits </h1>
        <p> Is thiz working? Yeah! </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}> Release Form </button>
          {persons}
      </div>
    );
  }
}

export default App;
