import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import ApartmentDetails from './components/apartmentDetails/apartmentDetails';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/:apartmentId' component={ApartmentDetails}/>
    </Switch>
    <Footer />
  </div>
);

export default App;
