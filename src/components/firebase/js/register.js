import React, { Component } from 'react';
import './../css/register.css';
import firebase, { auth } from './fire-connect';

class Register extends Component {
  constructor(){
    super();

    this.state ={
      username: '',
      password: '',
      user: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }
  handleInputChange(event){
    let target  = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  }
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      
    });
  }
  
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 register-box">
              <form action="">
                <div className="form-group">
                  <br/>
                  <input id="txtemail" value={this.state.username} className="input-box" type="email" name="username" placeholder="Email id" onChange = {this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <br/>
                  <input className="input-box" id="txtpass" type="password" value={this.state.password} name="password" placeholder="Password" onChange = {this.handleInputChange}/>
                </div>
              </form>
              <button id="btnlogin" className="buttonAdd btn" onClick = {this.login}>Login</button>
              <button id="btnsubmit" className="buttonAdd btn" onClick = {this.register}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
