import React from 'react';
import PropTypes from 'prop-types';

const Apartment = ({ apartment }) => (
  <div className="plp__item">
    <img src={apartment.mainImg}/>
    <div className="plp__item-title">{apartment.title}</div>
    <div className="plp__item-price">{apartment.price}</div>
  </div>
);

Apartment.propTypes = {
  apartment: PropTypes.object
};

export default Apartment;
