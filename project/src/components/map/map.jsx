import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';
import useMap from '../../hooks/use-map/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

function Map({city, offers, activeOfferId}) {
  const ref = useRef(null);
  const map = useMap(ref, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, offers, activeOfferId]);

  return (
    <div
      id="map"
      ref={ref}
    />
  );
}

Map.propTypes = {
  city: propType.city.isRequired,
  offers: PropTypes.arrayOf(propType.offer).isRequired,
  activeOfferId: PropTypes.string,
};

export default Map;
