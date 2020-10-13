import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

const App = (props) => {
  const {offersAmount} = props;

  // return (
  //   <MainScreen offersAmount = {offersAmount}/>
  // );
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact>
          <MainScreen offersAmount = {offersAmount}></MainScreen>
        </Route>
        <Route path = '/login' exact>
          <Login />
        </Route>
        <Route path = '/offer/:id?' exact>
          <Offer />
        </Route>
        <Route path = '/favorites' exact>
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
};

export default App;
