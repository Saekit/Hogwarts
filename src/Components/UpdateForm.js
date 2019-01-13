import React from "react";

class UpdateForm extends React.Component {


  submitHandler = (e) => {
    e.preventDefault()
  }

  render() {
    if (this.props.clicked){
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Change house: 
            <select value={this.props.value} onChange={this.props.handleChange}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="HufflePuff">HufflePuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            </select>
          </label>
        </form>
      </div>
    )
  } else {
    return null
  }
  }
}

export default UpdateForm;
