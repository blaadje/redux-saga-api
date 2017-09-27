
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.clickMe(e) }>
          <input type="text" ref={ el => this.inputName = el } placeholder="name"/>
          <input type="text" ref={ el => this.inputPassword = el } placeholder="password"/>
          <button>Envoyer</button>
        </form>
        <ul>
          <li>
            Name: 
            {this.props.name}
          </li>
          <li>
            password: 
            {this.props.password}
          </li>
        </ul>
      </div>
    );
  }
  clickMe = function (e) {
    e.preventDefault()
    this.props.submit(this.inputName.value, this.inputPassword.value)
  }
}

