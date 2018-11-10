import React, { Component } from 'react';
import '../App.css';
class UsersList extends Component {

  removeUser= (key) =>{
     this.props.delete(key);
  }
    render() {
      const listItems = this.props.users.map((user,i)=>{
        return <li className="users-list-item" key={i} onClick={()=>this.removeUser(i)} >{user}</li>;
      });   
    return (
      <div>
        <ul className="users-list">
        {listItems}
        </ul>
      </div>
    );
  }
}

export default UsersList;