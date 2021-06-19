import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(ref, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current !== null && map === null) {
      const {latitude, longitude, zoom} = city.location;
      const instance = leaflet.map(ref.current, {
        center: [latitude, longitude],
        zoom,
        zoomControl: false,
        marker: true,
      });
      instance.setView([latitude, longitude], zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, [ref, map, city]);

  return map;
}

export default useMap;
