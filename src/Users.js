import React, { Component } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
class Users extends Component {
    constructor(){
        super();
        this.state = {
            users: ['Adam', 'Ola', 'Karol']
        }
    }
    updateUsersList = (name) => {
        this.setState((prevState)=>{
            return({ users: prevState.users.concat(name) })
        });
    }

    deleteUser=(keyValue)=>{
        // console.log('Usuń użytkownika z indexem '+ keyValue);

        let updateUsersList = this.state.users.filter((user)=>{
            return this.state.users.indexOf(user) !== keyValue;
        });
        this.setState({
            users:updateUsersList
        
        });
    }
  render() {
      console.log(this.state.users);
    return (
      <div className="App">
        <h1 className="App-text">
        User's list.
        </h1>
      <UsersForm update={this.updateUsersList} />
      <UsersList users={this.state.users} delete={this.deleteUser} />
      
      </div>
       );
  }
}

export default Users;