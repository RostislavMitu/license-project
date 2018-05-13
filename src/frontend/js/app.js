import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import ApartmentsListPage from './apartments/apartmentsListPage';
import ApartmentDetails from './components/apartmentDetails/apartmentDetails';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={ApartmentsListPage}/>
      <Route path='/:apartmentId' component={ApartmentDetails}/>
    </Switch>
  </div>
);

export default App;
