import React from 'react';
import LoginButton from './components/loginButton/loginButton';
import Header from './components/header/header';
import ApartmentsList from './apartments/apartmentsList';

const App = () => (
  <div>
    <Header />
    {/*<LoginButton />*/}
    <ApartmentsList />
  </div>
);

export default App;
