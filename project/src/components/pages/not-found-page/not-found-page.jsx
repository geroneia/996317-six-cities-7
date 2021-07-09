import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__text">
          404
          <b>Page not found</b>
        </h1>
        <Link to="/">Go to main page</Link>
      </div>
    </section>
  );
}

export default NotFound;
