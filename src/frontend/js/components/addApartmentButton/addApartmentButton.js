import React from 'react';
import Modal from '../modal/modal';
import AddApartmentForm from '../addApartmentForm/addApartmentForm';

class AddApartmentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApartmentFormOpen: false
    };
    this.openApartmentForm = this.openApartmentForm.bind(this);
    this.closeApartmentForm = this.closeApartmentForm.bind(this);
  }
  openApartmentForm() {
    this.setState({
      isApartmentFormOpen: true
    });
  }
  closeApartmentForm() {
    this.setState({
      isApartmentFormOpen: false
    });
  }
  render() {
    const { isApartmentFormOpen } = this.state;
    return (
      <span>
        <button className="button" onClick={this.openApartmentForm}>Add Apartment</button>
        {isApartmentFormOpen &&
        <Modal className="sign-modal center-content__medium" onCloseModal={this.closeApartmentForm}>
          <AddApartmentForm />
        </Modal>}
      </span>
    );
  }
}

export default AddApartmentButton;
