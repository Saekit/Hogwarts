import React, { Component } from "react";
import "./App.css";
import HouseContainer from "./Containers/HouseContainer";
import CharacterContainer from "./Containers/CharacterContainer";
import NewCharacterForm from "./Components/NewCharacterForm";
import SearchForm from "./Components/SearchForm"

class App extends Component {

  state = {
    characters: [],
    searchTerm: "",
    filteredArr: []
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
    this.setState({
      characters: newCharArr,
    })
  }


    changeHandler = (e) => {
      let search = e.target.value
      let newArr = [...this.state.characters].filter(char => char.name.toLocaleLowerCase().includes(search))
      this.setState({
        searchTerm: search,
        filteredArr: newArr
      })
    }


  render() {
    return (
      <div className="app">
      <h1>Hogwarts</h1>
        <SearchForm changeHandler={this.changeHandler} />
        <CharacterContainer
          characters={this.state.filteredArr}
          clickHandler={this.clickHandler}
          />
        <HouseContainer
          characters={this.state.characters} />
        <NewCharacterForm newCharacter={this.newCharacter}
        saveCharacter={this.saveCharacter}/>
      </div>
    );
  }
}

export default App;
