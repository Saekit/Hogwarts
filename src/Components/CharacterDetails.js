import React from "react";

const CharacterDetails = props => {

  let characters = props.chars
  let charNameFil = characters.find((char)=> char.name === props.charName)

  if (props.clicked){
    return (
      <ul>
        <li>Name: {charNameFil.name}</li>
        <li>Age: {charNameFil.age}</li>
        <li>House: {charNameFil.house}</li>
        <li>Role: {charNameFil.role}</li>
      </ul>
    )
  } else {
    return null
  }


};

export default CharacterDetails;
