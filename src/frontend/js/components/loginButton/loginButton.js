import React from 'react';
import Modal from '../modal/modal';
import LoginForm from '../loginForm/loginForm';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false
    };
    this.openLoginForm = this.openLoginForm.bind(this);
    this.closeLoginForm = this.closeLoginForm.bind(this);
  }
  openLoginForm() {
    this.setState({
      isLoginOpen: true
    });
  }
  closeLoginForm() {
    this.setState({
      isLoginOpen: false
    });
  }
  render() {
    const { isLoginOpen } = this.state;
    return (
      <span>
        <button className="button" onClick={this.openLoginForm}>Login</button>
        {isLoginOpen &&
          <Modal className="sign-modal center-content__medium" onCloseModal={this.closeLoginForm}>
            <LoginForm />
          </Modal>}
      </span>
    );
  }
}

export default LoginButton;
