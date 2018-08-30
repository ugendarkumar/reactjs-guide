import React, { Component } from 'react';
import  './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {name:'ugendar',age:25,id:1000},
      {name:'ugi',age:25,id:1001},
      {name:'neethu',age:27,id:1002}
    ],
    showPersons:false
  }

  switchNameHandler = (event,id) => {



  //  this.setState({persons:[
  //   {name:nameNew,age:25},
  //   {name:'ugi',age:25},
  //   {name:'neethu',age:24}
  // ]})


}

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  toggleNameHandler = () => {
    this.setState({showPersons:!this.state.showPersons})
  }

  deletePersonHandler = (deleteIndex) => {
   // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
     persons.splice(deleteIndex,1);
    this.setState({persons:persons});
  };


  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      border: '1px solid blue',
      font:'inherit',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
             return <Person click = {(event) => this.deletePersonHandler(event,index)} 
             change = {(event) => this.nameChangedHandler(event,person.id)}
              name = {person.name} age = {person.age}
              key = {person.id}> </Person>              
            })
          }
        </div>  
      )
      style.backgroundColor = 'red';
    }

    const classes = [];
    
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
     <h1>Hi i am a react app!</h1>
      <p className ={classes.join(' ')}>This is really working!</p>
      <button style = {style} onClick = {this.toggleNameHandler}>Toggle persons</button>
      {persons}
      </div>
    );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m react app'));
}

}

export default App;
