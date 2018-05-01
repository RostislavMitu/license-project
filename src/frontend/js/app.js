import React from 'react';
import LoginButton from './components/loginButton/loginButton';
import Header from './components/header/header';
import ApartmentsListPage from './apartments/apartmentsListPage';

const App = () => (
  <div>
    <Header />
    {/*<LoginButton />*/}
    <ApartmentsListPage />
  </div>
);

export default App;
