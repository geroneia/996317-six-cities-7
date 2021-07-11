import React from 'react';
import {SHAKE_ANIMATION_TIMEOUT, MILLISECONDS_IN_SECOND} from '../../../const';

// eslint-disable-next-line react/display-name
export const ErrorNotification = (Component) => (props) => {
  const onError = (target) => {
    target.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / MILLISECONDS_IN_SECOND}s`;
    setTimeout(() => {
      target.style.animation = '';
    }, SHAKE_ANIMATION_TIMEOUT);
  };
  return (
    <Component
      {...props}

      onError={onError}
    />
  );
};
