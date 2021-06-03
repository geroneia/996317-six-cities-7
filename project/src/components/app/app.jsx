import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App(props) {
  const {cardsCount} = props;

  return <MainPage cardsCount={cardsCount} />;
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
