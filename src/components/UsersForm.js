import React, { Component } from 'react';
import '../App.css';
class UsersForm extends Component {

    addUser = (e) => {
        e.preventDefault();
        console.log(this.inputValue.value);
        this.props.update(this.inputValue.value);
    }
  render() {
    return (
      <div className="users-form">
        <form  onSubmit={this.addUser}>   
            <input className="text-form" type="text" placeholder="Nazwa użytkownika"  ref={(data)=>{this.inputValue=data}}  />  
            <input className="submit-form" type="submit" value="Dodaj użytkownika" />
        

        </form>
      </div>
    );
  }
}

export default UsersForm;
