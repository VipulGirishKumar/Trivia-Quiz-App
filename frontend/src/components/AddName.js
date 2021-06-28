import React, { Component } from 'react';
//import Hello from './Hello';

class AddName extends Component {
  state = {
    name: '',
    showName: false
  }

  HandleChangeName = (event) => {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleEnter = (event) => {
    event.preventDefault(); // prevents browser from refreshing each time
    this.setState({
      showName: true
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEnter}>
          <label>Please Enter Your Name: </label>
          <input type="text" name="name" onChange={this.HandleChangeName} value={this.state.name} />
          <button type="enter" onClick={this.handleEnter}>Enter</button>
          {this.state.showName && <h2>Hello, {this.state.name}! Welcome to Team 38's Trivia!</h2>}
        </form>
      </div>
    );
  }
}
export default AddName;

