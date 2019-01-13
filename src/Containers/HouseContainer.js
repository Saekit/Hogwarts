import React from "react";
import House from "../Components/House";
import CharacterDetails from '../Components/CharacterDetails'

export default class HouseContainer extends React.Component {

  state = {
    clicked: false,
    charName: ""
  }

  clickHandler = (name) => {
    let value = this.state.clicked
    this.setState({
      clicked: !value,
      charName: name
    })
  }


  render() {

    return(
      <div className={'houseContainer'}>
      <h1>Houses</h1>
        <ul>
        <House chars={this.props.characters} clickHandler={this.clickHandler} />
        <CharacterDetails chars={this.props.characters}
        charName={this.state.charName}
        clicked={this.state.clicked}
        />
        </ul>
      </div>
    )
  }
}
