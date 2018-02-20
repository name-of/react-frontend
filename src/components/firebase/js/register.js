import React, { Component } from 'react';
import './../css/register.css';
import firebase from './fire-connect';

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
    this.login = this.login.bind(this);
  }
  handleInputChange(event){
    let target  = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  }

  /* register new user
  */

  register() {
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
    .catch((error) => {
      // Handle Errors here.
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  
  /*  login user
  */

  login(){
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
    .then(() => {
      console.log("user logged in")
    })
    .catch((error) => {
        var errorMessage = error.message;
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
              <div className="row">
                <div className="col"> 
                  <button id="btnlogin" className="buttonAdd btn btn-block" onClick = {this.login}>Login</button>
                </div>
                <div className="col">
                  <button id="btnsubmit" className="buttonAdd btn btn-block" onClick = {this.register}>Register</button>
                </div>
              </div>
              
              <button id="btnfb" className="btn btn-block btnSocial">Login With Facebook</button>
              <button id="btngoogle" className="btn btn-block btnSocial">Login With Google+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
