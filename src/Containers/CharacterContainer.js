import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    return (
      <div>
      <h1>Characters</h1>
        {this.props.characters.map((char, i) => <CharacterCard
          key={i}
          char={char}
          image1={char.image1}
          name={char.name}
          house={char.house}

        />)}
      </div>
    );
  }
}
