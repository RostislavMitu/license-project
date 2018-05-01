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
      <div>
        <button onClick={this.openLoginForm}>Login</button>
        {isLoginOpen &&
          <Modal className="login-modal center-content__medium" onCloseModal={this.closeLoginForm}>
            <LoginForm />
          </Modal>}
      </div>
    );
  }
}

export default LoginButton;
