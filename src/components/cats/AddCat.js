import React, { Component } from 'react'

class AddCat extends Component {
  state = {
    name: '',
    breed: '',
    gender: '',
    age: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Cat</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="input-field">
            <textarea id="breed" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="breed">Breed:</label>
          </div>
          <div className="input-field">
            <textarea id="gender" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="gender">Gender:</label>
          </div>
          <div className="input-field">
            <textarea id="age" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="age">Age:</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add Cat</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddCat;