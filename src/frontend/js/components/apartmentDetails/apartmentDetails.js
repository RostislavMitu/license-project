import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import DayPicker from './DayPicker';

const GET_APARTMENT = gql`
  query apartment($id: ID!) {
    apartment(id: $id) {
      id
      title,
      rooms,
      amenities,
      price,
      rules,
      accessibility,
      description,
      owner,
      createdAt,
      mainImg
    }
  }
`;

const ApartmentDeteils = ({
  match
}) => (
  <Query query={GET_APARTMENT} variables={{ id: match.params.apartmentId }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <div>
          <div className="pdp__main-img" style={{backgroundImage: `url(${data.apartment.mainImg})`}}/>
          <div className="pdp__body wrapper medium-2-1 small-1">
            <div>
              <h2>{data.apartment.title}</h2>
              <div>
                <span className="properties">
                  <i className="fas fa-users" />
                  <span>4 Guests</span>
                </span>
                <span className="properties">
                  <i className="fas fa-door-open" />
                  <span>2 rooms</span>
                </span>
                <span className="properties">
                  <i className="fas fa-bed" />
                  <span>2 beds</span>
                </span>
              </div>
              <div className="description-point">
                <h3>Description</h3>
                <p>
                  The world famous Seashell house is a gated property .... owners/architects live next door. You will have a private pool, two king beds , kitchenette and BBQ and entire property, both shells . In shell wifi, air conditioning.
                  I am proud to enable your stay . Enjoy a day or more feeling like a celebrity as passers by will seek to look in with intrigued expressions.
                </p>
              </div>
              <div className="description-point">
                <h3>Amenities</h3>
                <div className="wrapper small-3 amenities">
                  <div className="properties">
                    <i className="fas fa-utensils" />
                    <span>Kitchen</span>
                  </div>
                  <div className="properties">
                    <i className="fas fa-tv" />
                    <span>Cable TV</span>
                  </div>
                  <div className="properties">
                    <i className="fas fa-wifi" />
                    <span>Wifi</span>
                  </div>
                  <div className="properties">
                    <i className="fas fa-laptop" />
                    <span>Laptop friendly workspace</span>
                  </div>
                  <div className="properties">
                    <i className="fas fa-parking" />
                    <span>Free parking</span>
                  </div>
                </div>
              </div>
              <div className="description-point">
                <h3>House Rules</h3>
                <ul>
                  <li>No smoking</li>
                  <li>Not suitable for pets</li>
                  <li>Check-in time is 2PM - 2AM (next day)</li>
                  <li>Check out by 12PM (noon)</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="booking">
                <div className="price">$308 per night</div>
                <div className="data-picker">
                  <small className="small">
                    Dates
                  </small>
                  <DayPicker />
                </div>
                <div className="guests">
                  <small className="small">
                    Guests
                  </small>
                  <select className="select" id="guests">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </div>
                <div className="input-wrapper">
                  <input className="form__input submit" id="logIn" type="button" value="Book" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

ApartmentDeteils.propTypes = {
  match: PropTypes.object
};

export default ApartmentDeteils;
