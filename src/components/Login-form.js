import React, { Component } from 'react';

export default class Login extends Component {
  constructor (args){
    super(args)
    this.state = {
      loading: false
    }
  }

  componentWillReceiveProps ({ result }) {
    if (result) {
      this.setState({ 
        loading: false,
        result: result
       })
    }
  }

  render() {
    const { loading, result } = this.state

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="ui teal header">Login</div>
          <form className="ui large form" onSubmit={ (e) => this.clickMe(e) }>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" defaultValue="g7tdr@vmani.com" ref={ el => this.inputName = el } placeholder="name" required/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input className="field" defaultValue="Bonjour123"  type="password" ref={ el => this.inputPassword = el } placeholder="password" required/>
                </div>
              </div>
              {!loading && 
                <button className="ui fluid large teal submit button">Envoyer</button>
              }
              {loading &&
                <div>Loading</div>
              }
            </div>
          </form>
          <div className="ui message">
            <div className="ui list">
              <div>Name: {this.props.name}</div>
              <div>Password: {this.props.password}</div>
              <div>Token: {this.props.token}</div>
              {(result) &&
                <div>Result: {this.state.result.status}</div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
  clickMe = function (e) {
    e.preventDefault()
    this.setState({ loading: true })
    let token = Math.random().toString(36).substr(2)
    this.props.submit(this.inputName.value, this.inputPassword.value, token)
  }
}

