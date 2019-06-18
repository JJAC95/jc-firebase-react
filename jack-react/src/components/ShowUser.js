import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class ShowUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('userList').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such user!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('userList').doc(id).delete().then(() => {
      console.log("User successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing user: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">User List</Link></h4>
            <h3 class="panel-title">
              {this.state.user.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Email:</dt>
              <dd>{this.state.user.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowUser;