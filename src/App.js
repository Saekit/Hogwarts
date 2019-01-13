import React, { Component } from "react";
import "./App.css";
import HouseContainer from "./Containers/HouseContainer";
import CharacterContainer from "./Containers/CharacterContainer";
import NewCharacterForm from "./Components/NewCharacterForm";

class App extends Component {

  state = {
    characters: [],
  }

  componentDidMount(){
    fetch('http://localhost:3001/characters')
      .then(res => res.json())
      .then(data => this.setState({
        characters: data
      }))
  }

  newCharacter = (newCharObj) => {
    let newCharArr = [...this.state.characters, newCharObj]
  }

  render() {
    return (
      <div className="app">
      <h1>Hogwarts</h1>
        <CharacterContainer
          characters={this.state.characters}
          clickHandler={this.clickHandler}
          />
        <HouseContainer
          characters={this.state.characters} />
        <NewCharacterForm newCharacter={this.newCharacter}/>
      </div>
    );
  }
}

export default App;
