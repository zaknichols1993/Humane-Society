import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDog } from '../../store/actions/dogActions';

class AddDog extends Component {
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
    this.props.addDog(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Dog</h5>
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
            <button className="btn pink lighten-1">Add Dog</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDog: (dog) => dispatch(addDog(dog))
  }
}

export default connect(null, mapDispatchToProps)(AddDog);