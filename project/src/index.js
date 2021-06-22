import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockOffers from './mocks/offers';
import {mockReviews} from './mocks/reviews';
import {adaptToClient} from './utils';

const offers = adaptToClient(mockOffers);
const reviews = adaptToClient(mockReviews);

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
