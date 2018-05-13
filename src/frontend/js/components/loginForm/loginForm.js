import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  onSubmit() {
    fetch('/login', {
      body: JSON.stringify(this.state),
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(() => window.location.reload());
  }

  render() {
    return (
      <form className="form">
        <div className="input-wrapper">
          <label className="offscreen">Email</label>
          <input className="form__input" type="email" placeholder="Email Address" onChange={this.onEmailChange} value={this.state.email} />
        </div>
        <div className="input-wrapper">
          <label className="offscreen">Password</label>
          <input className="form__input" type="password" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
        </div>
        <div className="input-wrapper">
          <input className="styled-checkbox" id="rememberMe" type="checkbox" value="" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="input-wrapper">
          <input className="form__input submit" id="logIn" type="button" value="Log in" onClick={this.onSubmit} />
        </div>
      </form>
    );
  }
}
