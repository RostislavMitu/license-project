import React from 'react';

export default class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  onLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  onSubmit() {
    fetch('/signup', {
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
          <label className="offscreen">First name</label>
          <input className="form__input" type="text" placeholder="First name" onChange={this.onFirstNameChange} value={this.state.firstName} />
        </div>
        <div className="input-wrapper">
          <label className="offscreen">Last name</label>
          <input className="form__input" type="text" placeholder="Last name" onChange={this.onLastNameChange} value={this.state.lastName} />
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
          <input className="form__input submit" id="logIn" type="button" value="Register" onClick={this.onSubmit} />
        </div>
      </form>
    );
  }
}
