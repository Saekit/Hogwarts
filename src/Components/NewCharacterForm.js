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
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.newCharacter(this.state)
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
      <div>
        <form onSubmit={this.submitHandler}
          className={'newCharForm'}>
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
            value={this.state.house}
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
            value={this.state.role}
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
