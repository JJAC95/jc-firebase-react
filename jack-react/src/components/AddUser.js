import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class AddUser extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('userList');
    this.state = {
      name: '',
      email: '',
      
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email } = this.state;

    this.ref.add({
      name,
      email,
    }).then((docRef) => {
      this.setState({
        name: '',
        email: '',
        
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { name, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add User
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <textArea class="form-control" name="email" onChange={this.onChange} placeholder="Email" cols="80" rows="3">{email}</textArea>
              </div>
              <div class="form-group">
              
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;