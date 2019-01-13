import React from "react";
import UpdateForm from './UpdateForm'

class CharacterCard extends React.Component {

  state = {
    clicked: false,
    house: this.props.house
  }

  clickHandler = (house) => {
    let value = this.state.clicked
    this.setState({
      clicked: !value,
    })
  }
  handleChange = (e) => {
    this.setState({
      house: e.target.value
    })
  }

  saveUpdate = () => {
    let id = this.props.char.id
    fetch(`http://localhost:3001/characters/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.props.char.name,
        age: this.props.char.age,
        house: this.state.house,
        role: this.props.char.role,
        image1: this.props.char.image1,
        image2: this.props.char.image2
      })
    })
  }
  componentDidUpdate = () => {
    this.saveUpdate()
  }

  render() {
    return (
      <div>
        <img
          src={this.props.image1} className={'index-image'}
          alt="" />
        <h4>{this.props.name}</h4>
        <h5 onClick={()=>this.clickHandler(this.props.house)}>{this.state.house}</h5>
        <UpdateForm char={this.props.char} clicked={this.state.clicked}
        handleChange={this.handleChange}
        />
        <hr />
      </div>
    );
  }
}



export default CharacterCard;
