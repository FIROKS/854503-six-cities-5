import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersAmount} = props;

  return (
    <MainScreen offersAmount = {offersAmount}/>
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
};

export default App;
