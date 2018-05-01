import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Apartment from './apartment';

const GET_APARTMENTS = gql`
  {
    apartments {
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

const ApartmentsList = () => (
  <div className="product-list">
    <h2>Homes around the world</h2>
    <Query query={GET_APARTMENTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className="wrapper plp-wrapper large-4 medium-3 small-2">
            {
              data.apartments.map((apartment) => (
                <Apartment key={apartment.id} apartment={apartment}/>
              ))
            }
          </div>
        );
      }}
    </Query>
  </div>
);

export default ApartmentsList;
