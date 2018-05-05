import React from 'react';

const LoginForm = () => (
  <div className="sign-form">
    <div className="input-wrapper">
      <label className="offscreen">Email</label>
      <input className="sign-form__input" type="email" placeholder="Email Address" />
    </div>
    <div className="input-wrapper">
      <label className="offscreen">Password</label>
      <input className="sign-form__input" type="password" placeholder="Password" />
    </div>
    <div className="input-wrapper">
      <input className="styled-checkbox" id="rememberMe" type="checkbox" value="" />
      <label htmlFor="rememberMe">Remember me</label>
    </div>
    <div className="input-wrapper">
      <input className="sign-form__input submit" id="logIn" type="button" value="Log in" />
    </div>
  </div>
);

export default LoginForm;
