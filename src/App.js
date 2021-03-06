import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state ={
   persons: [
     { name: 'Max', age: 28 } ,
     { name: 'Manu', age: 29 },
     { name: 'Amit', age: 26 }
    ],
    otherState: 'some other value'
 }
 switchNameHandler = (newName) => {
   //console.log('was clisked!');
   this.setState({
     persons:[
      { name: newName, age: 28 } ,
      { name: 'Manu', age:  29 },
      { name: 'Kumar singh', age: 27 }

     ]  
   })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
       { name: 'Max', age: 28 } ,
       { name: event.target.value, age:  29 },
       { name: 'Kumar singh', age: 27 }
  
      ]  
    })
  
 }

 render() {
    return (
      <div className="App">
      <h1> Hi , I am React App </h1>
      <button onClick={() => this.switchNameHandler ('Maximilan!!')}> 
      Switch Name </button>  
      <Person
       name={this.state.persons[0].name}
       age={this.state.persons[0].age}/>
      <Person
       name={this.state.persons[1].name}
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Max!')} 
       changed={this.nameChangeHandler}> My Hobbies :Racing </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
