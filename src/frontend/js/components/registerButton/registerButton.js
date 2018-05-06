import React from 'react';
import Modal from '../modal/modal';
import RegisterForm from '../registerForm/registerForm';

class RegisterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterOpen: false
    };
    this.openRegisterForm = this.openRegisterForm.bind(this);
    this.closeRegisterForm = this.closeRegisterForm.bind(this);
  }
  openRegisterForm() {
    this.setState({
      isRegisterOpen: true
    });
  }
  closeRegisterForm() {
    this.setState({
      isRegisterOpen: false
    });
  }
  render() {
    const { isRegisterOpen } = this.state;
    return (
      <span>
        <button className="button register-button" onClick={this.openRegisterForm}>Register</button>
        {isRegisterOpen &&
        <Modal className="sign-modal center-content__medium" onCloseModal={this.closeRegisterForm}>
          <RegisterForm />
        </Modal>}
      </span>
    );
  }
}

export default RegisterButton;
