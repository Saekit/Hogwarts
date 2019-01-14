import React from "react";

class NewCharacterForm extends React.Component {

  state = {
      name: "",
      age: "",
      house: "",
      role: "",
      image1: "",
      image2: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.newCharacter(this.state)
    fetch("http://localhost:3001/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          age: this.state.age,
          house: this.state.house,
          role: this.state.role,
          image1: this.state.image1,
          image2: this.state.image2
        })
      })
    this.setState({
        name: "",
        age: "",
        house: "",
        role: "",
        image1: "",
        image2: ""
    })
  }

  render(){
    return(
      <div className={'newCharForm'}>
      <h1>Add a Character</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
          /><br />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.changeHandler}
          /><br />
          <label>
            House:
            <select
            name="house"
            value={this.state.value}
            onChange={this.changeHandler}>
            <option value="Gryffindor">
            Gryffindor
            </option>
            <option value="HufflePuff">
            HufflePuff
            </option>
            <option value="Ravenclaw">
            Ravenclaw
            </option>
            <option value="Slytherin">
            Slytherin
            </option>
            </select>
          </label><br />
          <label>
            Role:
            <select
            name="role"
            value={this.state.value}
            onChange={this.changeHandler}>
            <option value="student">
            student
            </option>
            <option value="professor">
            professor
            </option>
            </select>
          </label><br />
          <input
            type="text"
            name="image1"
            placeholder="image1"
            value={this.state.image1}
            onChange={this.changeHandler}
          /><br />
          <input
            type="text"
            name="image2"
            placeholder="image2"
            value={this.state.image2}
            onChange={this.changeHandler}
          /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default NewCharacterForm;
