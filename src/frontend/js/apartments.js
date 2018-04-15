import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOGS = gql`
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

const Apartments = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <div className="wrapper plp-wrapper large-3 medium-2 small-1">
          {
            data.apartments.map((apartment) => (
              <div className="plp-item" key={apartment.id}>
                ID: {apartment.id} <br/>
                <img src={apartment.mainImg}/>
              </div>
            ))
          }
        </div>
      );
    }}
  </Query>
);

export default Apartments;
