import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockOffers from './mocks/offers';
import {adaptToClient} from './utils';


const offers = adaptToClient(mockOffers);

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
