import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Apartment from './apartment';

const GET_APARTMENTS = gql`
  query apartments($search: String!, $city: String!) {
    apartments(search: $search, city: $city) {
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

const ApartmentsList = ({ searchQuery, city }) => (
  <div>
    <Query query={GET_APARTMENTS} variables={{ search: searchQuery, city }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className="wrapper plp-wrapper large-4 medium-3 small-2">
            {
              data.apartments.map((apartment) => (
                <Link to={`/${apartment.id}`} key={apartment.id}>
                  <Apartment key={apartment.id} apartment={apartment}/>
                </Link>
              ))
            }
          </div>
        );
      }}
    </Query>
  </div>
);

ApartmentsList.propTypes = {
  searchQuery: PropTypes.string,
  city: PropTypes.string
};

export default ApartmentsList;
