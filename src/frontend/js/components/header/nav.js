import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LoginButton from '../loginButton/loginButton';

const IS_USER_LOGGED = gql`
  query isUserLogged {
    isUserLogged
  }
`;

const Nav = () => (
  <Query query={IS_USER_LOGGED}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <nav className="header__nav">
          {data.isUserLogged ? (
              <span>
                <button className="button">Add apartment</button>
                <a href='/logout' className="button">Logout</a>
              </span>
            ) : (
              <span>
                <button className="button">About Us</button>
                <LoginButton />
                <button className="button register-button">Register</button>
              </span>
            )}
        </nav>
      );
    }}
  </Query>
);

export default Nav;
