import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const settings = {
  OFFERS_AMOUNT: 5,
};

ReactDOM.render(
    <App
      offersAmount = {settings.OFFERS_AMOUNT}
    />,
    document.querySelector(`#root`)
);
