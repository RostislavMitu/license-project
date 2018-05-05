import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ className, onCloseModal, children }) => (
  <div className="modal-overlay" onClick={onCloseModal}>
    <div className={`modal ${className}`} onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  className: PropTypes.string,
  onCloseModal: PropTypes.func,
  children: PropTypes.object
};

export default Modal;
