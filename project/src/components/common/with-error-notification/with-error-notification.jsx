import React from 'react';
import {SHAKE_ANIMATION_TIMEOUT, MILLISECONDS_IN_SECOND} from '../../../const';

export const withErrorNotification = (Component) => {
  const {displayName, name} = Component;
  function WithErrorNotification(props) {
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
  }
  WithErrorNotification.displayName = `WithErrorNotification(${displayName || name || 'Component'})`;

  return WithErrorNotification;
};
