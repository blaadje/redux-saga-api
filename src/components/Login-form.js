import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="ui teal header">Login</div>
          <form className="ui large form" onSubmit={ (e) => this.clickMe(e) }>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" ref={ el => this.inputName = el } placeholder="name"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input className="field" type="text" ref={ el => this.inputPassword = el } placeholder="password"/>
                </div>
              </div>
              <button className="ui fluid large teal submit button">Envoyer</button>
            </div>
          </form>
          <div className="ui message">
            <div className="ui list">
              <div>Name: {this.props.name}</div>
              <div>Password: {this.props.password}</div>
              <div>Token: {this.props.token}</div>
              <div>Result: {this.props.result}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  clickMe = function (e) {
    e.preventDefault()
    let token = Math.random().toString(36).substr(2)
    this.props.submit(this.inputName.value, this.inputPassword.value, token)
  }
}

