import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 27},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 25}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Maximillian', age: 27},
        {name: 'Manu', age: 29}, 
        {name: 'Stephanie', age: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?')); 
  }
}

export default App;
