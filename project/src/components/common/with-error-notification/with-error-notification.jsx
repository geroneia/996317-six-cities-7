import React from 'react';
import {SHAKE_ANIMATION_TIMEOUT, MILLISECONDS_IN_SECOND} from '../../../const';

// eslint-disable-next-line react/display-name
export const WithErrorNotification = (Component) => (props) => {
  const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithErrorNotification.displayName = `WithErrorNotification(${getDisplayName(Component)})`;

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
