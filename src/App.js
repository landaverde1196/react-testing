import React, { Component } from "react";
import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
   cursor: pointer;
  
  &:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    //const style = {
     // backgroundColor: "green",
     // color: "white",
     // font: "inherit",
     // border: "1x solid blue",
     // padding: "8px",
     // cursor: "pointer",
    //  ":hover": {
      //  backgroundColor: "lightgreen",
        //color: "black"
    //  }
   // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      //style.backgroundColor = "red";
      //style[":hover"] = {
      //  backgroundColor: "salmon",
      //  color: "black"
     // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, im a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </ StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
