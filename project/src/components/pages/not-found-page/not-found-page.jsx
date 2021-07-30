import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

function NotFoundPage() {

  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__text">
          404
          <b>Page not found</b>
        </h1>
        <Link to={AppRoute.MAIN_INIT}>Go to main page</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
