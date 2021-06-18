import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';
import useMap from '../../hooks/use-map/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../const';

function Map({city, offers}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }

  }, [map, offers]);

  return (
    <div
      id="map"
      style={{minHeight: 980}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: propType.city.isRequired,
  offers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default Map;
